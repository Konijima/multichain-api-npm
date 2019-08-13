"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SetRuntimeParam(...params) {
    return params.length === 0 ? { method: 'setruntimeparam' } : { method: 'setruntimeparam', params };
}
exports.SetRuntimeParam = SetRuntimeParam;
