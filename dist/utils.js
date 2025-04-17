"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRunCommandsMock = exports.generateRunContextMocks = exports.createStaticFetcher = exports.createRunFetcher = exports.CoreProperty = exports.buildQueryString = void 0;
exports.createCredentialFetcher = createCredentialFetcher;
const axios_1 = require("axios");
const lodash_1 = require("lodash");
const nodes_1 = require("src/nodes");
const vitest_1 = require("vitest");
const buildQueryString = (params = {}) => {
    return new URLSearchParams(lodash_1.default.pickBy(params, (v) => v !== undefined)).toString();
};
exports.buildQueryString = buildQueryString;
exports.CoreProperty = {
    pagination: nodes_1.builder.property.section({
        id: "pagination",
        inline: true,
        properties: [
            nodes_1.builder.property.number({
                id: "limit",
                label: "Limit",
                required: true,
                min: 1,
                max: 50,
            }),
            nodes_1.builder.property.number({
                id: "offset",
                label: "Offset",
                required: true,
                min: 0,
            }),
        ],
    }),
};
const createRunFetcher = (dto) => {
    const client = axios_1.default.create({
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
exports.createRunFetcher = createRunFetcher;
const createStaticFetcher = (dto) => {
    const client = axios_1.default.create({
        baseURL: dto.baseUrl,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${dto.bearerToken}`,
        },
    });
    return client;
};
exports.createStaticFetcher = createStaticFetcher;
function createCredentialFetcher(dto) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (0, exports.createStaticFetcher)({
        baseUrl: (_c = (_b = (_a = dto.node) === null || _a === void 0 ? void 0 : _a.credentialsRecord) === null || _b === void 0 ? void 0 : _b[dto.credential.type]) === null || _c === void 0 ? void 0 : _c.base_url,
        bearerToken: (_e = (_d = dto.credential) === null || _d === void 0 ? void 0 : _d.properties) === null || _e === void 0 ? void 0 : _e[(_h = (_g = (_f = dto.node) === null || _f === void 0 ? void 0 : _f.credentialsRecord) === null || _g === void 0 ? void 0 : _g[dto.credential.type]) === null || _h === void 0 ? void 0 : _h.bearer_token_key],
    });
}
const generateRunContextMocks = (node, opts) => {
    return [
        generateRunContextMock(opts),
        (0, exports.generateRunCommandsMock)(node, opts.credentials || {}),
    ];
};
exports.generateRunContextMocks = generateRunContextMocks;
const generateRunContextMock = (opts) => {
    return Object.assign({ input: {}, operation_id: null, action_id: null, variables: {}, credentials: null, halted: false, halted_data: null, properties: {} }, opts);
};
const generateRunCommandsMock = (node, credentials) => {
    var _a, _b;
    const credentialMeta = (_a = node.credentials) === null || _a === void 0 ? void 0 : _a.find((c) => c.type === (credentials === null || credentials === void 0 ? void 0 : credentials.type));
    const commands = {
        halt: vitest_1.vi.fn(),
        resume: vitest_1.vi.fn(),
        jumpToNodeId: vitest_1.vi.fn(),
        next: vitest_1.vi.fn(),
        output: vitest_1.vi.fn(),
        error: vitest_1.vi.fn(),
        log: vitest_1.vi.fn(),
        runAction: vitest_1.vi.fn(),
    };
    return Object.assign(Object.assign({}, commands), { runFetch: (0, exports.createRunFetcher)({
            baseUrl: credentialMeta === null || credentialMeta === void 0 ? void 0 : credentialMeta.base_url,
            bearerToken: (_b = credentials === null || credentials === void 0 ? void 0 : credentials.properties) === null || _b === void 0 ? void 0 : _b[credentialMeta.bearer_token_key],
            cmd: commands,
        }) });
};
exports.generateRunCommandsMock = generateRunCommandsMock;
//# sourceMappingURL=utils.js.map