"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateMultiSig(requiredSignatures, keys) {
    return { method: 'createmultisig', params: [requiredSignatures, keys] };
}
exports.CreateMultiSig = CreateMultiSig;
