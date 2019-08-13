"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ApproveFrom(address, upgrade, approve) {
    return { method: 'approvefrom', params: [address, upgrade, approve] };
}
exports.ApproveFrom = ApproveFrom;
