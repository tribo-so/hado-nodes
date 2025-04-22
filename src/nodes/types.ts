import { AxiosInstance } from "axios"
import { NodeCategory } from "./enums"
import { z } from "zod"
import {
    zAllProperties,
    zComboboxProperty,
    zCredentialMeta,
    zDynamicOptions,
    zDynamicProperties,
    zNodeMeta,
    zNodeOperation,
    zSectionProperty,
    zSelectOption,
} from "./schemas"

export type CredentialMeta = z.infer<typeof zCredentialMeta> & {
    test: (ctx: TestCredentialContext) => Promise<any>
}

export interface NodeActionPowered extends NodeAction {
    operationsRecord: Record<string, NodeOperation>
}

export interface NodePowered extends Node {
    actionsRecord: Record<string, NodeActionPowered>
    credentialsRecord: Record<string, CredentialMeta>
    propertiesRecord: Record<string, NodeProperty>
}

export interface Node {
    type: string
    label: string
    description: string
    image_src: string
    color: string
    category: NodeCategory
    // default_properties_values?: Record<string, any>;
    // properties: z.infer<typeof zAllProperties>[];
    // optional_properties?: z.infer<typeof zAllProperties>[];
    actions?: NodeAction[]
    credentials?: CredentialMeta[]
    // run(ctx: RunContext, cmd: Commands);
    // get_dynamic_properties?: (ctx: DynamicPropertiesContext) => Promise<{
    //   properties?: z.infer<typeof zAllProperties>[];
    //   optional_properties?: z.infer<typeof zAllProperties>[];
    // }>;
    triggers?: (NodeOperation & {
        subscribe?: (ctx: SubscribeContext) => Promise<void>
        unsubscribe?: (ctx: SubscribeContext) => Promise<void>
    })[]
}

export interface NodeAction {
    id: string
    label: string
    operations: NodeOperation[]
}

export type NodeProperty = z.infer<typeof zAllProperties>

export type NodeOperation = Omit<z.infer<typeof zNodeOperation>, "type"> & {
    dynamic_properties?: DynamicPropertiesPowered
    run: (ctx: RunContext, cmd: Commands, extra?: Record<string, any>) => Promise<void>
}

export type ExecuteResult = {
    output?: any
    commands?: CommandResults
}

export type DynamicPropertiesContext = {
    properties?: Record<string, any>
    operation_id?: string
    action_id?: string
    credentials?: Credential
    fetch: AxiosInstance
}

export type DynamicOptionsContext = {
    properties?: Record<string, any>
    operation_id?: string
    action_id?: string
    property_id?: string
    credentials?: Credential
    fetch: AxiosInstance
}

export interface Credential {
    name: string
    type: string
    properties: Record<string, any>
}

export interface ResumeNodeDto {
    output?: any
    skip_run?: boolean
    error?: any
    halted_data?: any
    logs?: any
}

export type CommandResults = {
    halt?: boolean
    jump_to_node_id?: string
    next_target?: string
    error?: any
    resume?: boolean
}

export interface Commands {
    halt: () => Commands
    resume: (data: ResumeNodeDto, options?: { delay_ms?: number }) => Commands
    jumpToNodeId: (nodeId: string) => Commands
    next: (target: string) => Commands
    output: (output: any) => Commands
    error: (error: any) => Commands
    log: (...args: any) => void
    runAction: (ctx: RunContext, cmd: Commands, extra?: Record<string, any>) => any
    runFetch: AxiosInstance
}

export interface RunContext {
    input: Record<string, any>
    properties: Record<string, any>
    operation_id: string
    action_id?: string
    credentials: Credential
    variables: Record<string, any>
    halted: boolean
    halted_data?: any
}

export interface SubscribeContext {
    webhook_url: string
    properties: Record<string, any>
    trigger_id?: string
    credentials: Credential
    variables: Record<string, any>
    fetch: AxiosInstance
    saveVariable: (key: string, value: any, opts?: { secret?: boolean }) => void
}

export interface TestCredentialContext {
    credentials: Partial<Credential>
    fetch?: AxiosInstance
}

export type SelectOption = z.infer<typeof zSelectOption>

export type DynamicOptions = z.infer<typeof zDynamicOptions>
export type DynamicProperties = z.infer<typeof zDynamicProperties>

export type DynamicOptionsPowered = DynamicOptions & {
    get?: (ctx: DynamicOptionsContext) => Promise<SelectOption[]>
}

export type DynamicPropertiesPowered = DynamicProperties & {
    get: (ctx: DynamicPropertiesContext) => Promise<{
        properties?: z.infer<typeof zAllProperties>[]
        optional_properties?: z.infer<typeof zAllProperties>[]
    }>
}

export type ComboboxProperty = z.infer<typeof zComboboxProperty> & {
    dynamic_options?: DynamicOptionsPowered
}

export type SectionProperty = z.infer<typeof zSectionProperty>

export type NodeMetaIdType = "action" | "trigger"

export type NodeMeta = z.infer<typeof zNodeMeta> & {
    credentials: CredentialMeta[]
}
