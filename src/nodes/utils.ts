import axios from "axios";
import _ from "lodash";
import {
  builder,
  Commands,
  NodePowered,
  RunContext,
  Credential,
  Node,
} from "src/nodes";
import { describe, it, expect, vi } from "vitest";

export const buildQueryString = (params: Record<string, string> = {}) => {
  return new URLSearchParams(
    _.pickBy(params, (v) => v !== undefined)
  ).toString();
};

export const CoreProperty = {
  pagination: builder.property.section({
    id: "pagination",
    inline: true,
    properties: [
      builder.property.number({
        id: "limit",
        label: "Limit",
        required: true,
        min: 1,
        max: 50,
      }),
      builder.property.number({
        id: "offset",
        label: "Offset",
        required: true,
        min: 0,
      }),
    ],
  }),
};

// ███████╗███████╗████████╗ ██████╗██╗  ██╗███████╗██████╗
// ██╔════╝██╔════╝╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔══██╗
// █████╗  █████╗     ██║   ██║     ███████║█████╗  ██████╔╝
// ██╔══╝  ██╔══╝     ██║   ██║     ██╔══██║██╔══╝  ██╔══██╗
// ██║     ███████╗   ██║   ╚██████╗██║  ██║███████╗██║  ██║
// ╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
//
export const createRunFetcher = (dto: {
  baseUrl: string;
  bearerToken: string;
  cmd: Commands;
}) => {
  const client = axios.create({
    baseURL: dto.baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${dto.bearerToken}`,
    },
  });

  client.interceptors.response.use((response) => {
    if (response.status.toString().startsWith("2")) {
      dto.cmd.resume({ output: response.data, skip_run: true });
      return response;
    }
    dto.cmd.resume({
      error: {
        message: response.statusText,
        status: response.status,
        data: response.data,
      },
      skip_run: true,
    });

    return response;
  });

  return client;
};
export const createStaticFetcher = (dto: {
  baseUrl: string;
  bearerToken: string;
}) => {
  const client = axios.create({
    baseURL: dto.baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${dto.bearerToken}`,
    },
  });

  return client;
};
export function createCredentialFetcher(dto: {
  node: NodePowered;
  credential: Credential;
}) {
  return createStaticFetcher({
    baseUrl: dto.node?.credentialsRecord?.[dto.credential.type]?.base_url,
    bearerToken:
      dto.credential?.properties?.[
        dto.node?.credentialsRecord?.[dto.credential.type]?.bearer_token_key!
      ],
  });
}

// ████████╗███████╗███████╗████████╗███████╗
// ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝
//    ██║   █████╗  ███████╗   ██║   ███████╗
//    ██║   ██╔══╝  ╚════██║   ██║   ╚════██║
//    ██║   ███████╗███████║   ██║   ███████║
//    ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚══════╝
//

export const generateRunContextMocks = (
  node: Node,
  opts: Partial<RunContext>
): [RunContext, Commands] => {
  return [
    generateRunContextMock(opts),
    generateRunCommandsMock(node, (opts.credentials as Credential) || {}),
  ];
};

const generateRunContextMock = (opts: Partial<RunContext>): RunContext => {
  return {
    input: {},
    operation_id: null,
    action_id: null,
    variables: {},
    credentials: null,
    halted: false,
    halted_data: null,
    properties: {},
    ...opts,
  };
};

export const generateRunCommandsMock = (
  node: Node,
  credentials: Credential | {}
): Commands => {
  const credentialMeta = node.credentials?.find(
    (c) => c.type === (credentials as Credential)?.type
  );
  const commands = {
    halt: vi.fn(),
    resume: vi.fn(),
    jumpToNodeId: vi.fn(),
    next: vi.fn(),
    output: vi.fn(),
    error: vi.fn(),
    log: vi.fn(),
    runAction: vi.fn(),
  };
  return {
    ...commands,
    runFetch: createRunFetcher({
      baseUrl: credentialMeta?.base_url,
      bearerToken: (credentials as Credential)?.properties?.[
        credentialMeta.bearer_token_key!
      ],
      cmd: commands as any,
    }),
  } satisfies Commands;
};
