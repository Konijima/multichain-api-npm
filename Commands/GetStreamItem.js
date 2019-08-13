"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetStreamItem(stream, txId, verbose) {
    const params = [stream, txId, verbose].filter(v => v !== undefined);
    return { method: 'getstreamitem', params };
}
exports.GetStreamItem = GetStreamItem;
