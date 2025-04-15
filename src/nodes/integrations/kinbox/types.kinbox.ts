export type KinboxCustomField = {
  entity:
    | "contact"
    | "group"
    | "channel"
    | "session"
    | "user"
    | "product"
    | "task"
    | "deal";
  id: number;
  name: string;
  placeholder: string;
  options:
    | {
        value: string;
      }[]
    | string;
  type:
    | "text"
    | "textarea"
    | "number"
    | "decimal"
    | "select"
    | "multi-select"
    | "boolean"
    | "date"
    | "day"
    | "datetime"
    | "json";
};

export type KinboxPaginatedResponse<T> = {
  data: T[];
  totalCount: number;
};

export type KinboxGeneric = {
  id: string;
  createdAt: string;
  updatedAt: string;
  workspaceId: string;
  name: string;
};
