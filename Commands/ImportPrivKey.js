"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ImportPrivKey(...params) {
    return params.length === 0 ? { method: 'importprivkey' } : { method: 'importprivkey', params };
}
exports.ImportPrivKey = ImportPrivKey;
