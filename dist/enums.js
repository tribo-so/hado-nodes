"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationType = exports.PropertyType = exports.NodeCategory = void 0;
var NodeCategory;
(function (NodeCategory) {
    NodeCategory["INTEGRATION"] = "integration";
    NodeCategory["TRANSFORMATION"] = "transformation";
    NodeCategory["FLOW"] = "flow";
    NodeCategory["CORE"] = "core";
    NodeCategory["TRIGGER"] = "trigger";
    NodeCategory["INTERNAL"] = "internal";
})(NodeCategory || (exports.NodeCategory = NodeCategory = {}));
var PropertyType;
(function (PropertyType) {
    PropertyType["TEXT"] = "text";
    PropertyType["SELECT"] = "select";
    PropertyType["MULTI_SELECT"] = "multi_select";
    PropertyType["NUMBER"] = "number";
    PropertyType["SECTION"] = "section";
    PropertyType["DATETIME"] = "datetime";
    PropertyType["TEXTAREA"] = "textarea";
    PropertyType["CHECKBOX"] = "checkbox";
    PropertyType["COMBOBOX"] = "combobox";
    PropertyType["SWITCH"] = "switch";
    PropertyType["PHONE"] = "phone";
})(PropertyType || (exports.PropertyType = PropertyType = {}));
var AuthorizationType;
(function (AuthorizationType) {
    AuthorizationType["BEARER"] = "bearer";
    AuthorizationType["BASIC"] = "basic";
    AuthorizationType["API_KEY"] = "api_key";
})(AuthorizationType || (exports.AuthorizationType = AuthorizationType = {}));
//# sourceMappingURL=enums.js.map