"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes all transactions from the TX memory pool.
 * Local mining and the processing of incoming transactions and blocks should
 * be paused.
 * @returns A JSON-RPC request for the *clearmempool* command.
 */
function ClearMemPool() {
    return { method: 'clearmempool' };
}
exports.ClearMemPool = ClearMemPool;
