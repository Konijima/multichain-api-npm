"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns hex-encoded data or json object for block.
 * @param block The block hash or The block height in active chain.
 * @param verbose If true, returns more information.
 * @returns A JSON-RPC request for the *getblock* command.
 */
function GetBlock(block, verbose) {
    const params = [block, verbose].filter(v => v !== undefined);
    return { method: 'getblock', params };
}
exports.GetBlock = GetBlock;
