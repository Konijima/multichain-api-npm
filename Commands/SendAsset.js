"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SendAsset(...params) {
    return params.length === 0 ? { method: 'sendasset' } : { method: 'sendasset', params };
}
exports.SendAsset = SendAsset;
