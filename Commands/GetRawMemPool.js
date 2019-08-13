"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns all transaction ids in memory pool as a json array of string transaction ids.
 * @returns A JSON-RPC request for the *getrawmempool* command.
 */
function GetRawMemPool(verbose) {
    const params = [verbose].filter(v => v !== undefined);
    return params.length === 0 ? { method: 'getrawmempool' } : { method: 'getrawmempool', params };
}
exports.GetRawMemPool = GetRawMemPool;
