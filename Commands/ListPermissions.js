"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListPermissions(...params) {
    return params.length === 0 ? { method: 'listpermissions' } : { method: 'listpermissions', params };
}
exports.ListPermissions = ListPermissions;
