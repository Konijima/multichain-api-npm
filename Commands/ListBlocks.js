"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns list of block information objects
 * @param blocks Comma delimited list of block identifiers
 *               A json array of block identifiers
 * @param verbose If true, returns more information.
 * @returns A JSON-RPC request for the *listblocks* command.
 */
function ListBlocks(blocks, verbose) {
    const params = [blocks, verbose].filter(v => v !== undefined);
    return { method: 'listblocks', params };
}
exports.ListBlocks = ListBlocks;
