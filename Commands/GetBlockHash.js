"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetBlockHash(height) {
    return { method: 'getblockhash', params: [height] };
}
exports.GetBlockHash = GetBlockHash;
