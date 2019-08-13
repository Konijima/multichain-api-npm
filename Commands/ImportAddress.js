"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ImportAddress(...params) {
    return params.length === 0 ? { method: 'importaddress' } : { method: 'importaddress', params };
}
exports.ImportAddress = ImportAddress;
