"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppendRawChange(transaction, address, fee) {
    const params = [transaction, address, fee].filter(v => v !== undefined);
    return { method: 'appendrawchange', params };
}
exports.AppendRawChange = AppendRawChange;
