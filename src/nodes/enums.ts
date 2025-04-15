export  enum NodeCategory {
  INTEGRATION = "integration",
  TRANSFORMATION = "transformation",
  FLOW = "flow",
  CORE = "core",
  TRIGGER = "trigger",
  INTERNAL = "internal",
}

export enum PropertyType {
  TEXT = "text",
  SELECT = "select",
  MULTI_SELECT = "multi_select",
  NUMBER = "number",
  SECTION = "section",
  DATETIME = "datetime",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  COMBOBOX = "combobox",
  SWITCH = "switch",
  PHONE = "phone",
}

export enum AuthorizationType {
  BEARER = "bearer",
  BASIC = "basic",
  API_KEY = "api_key",
}
