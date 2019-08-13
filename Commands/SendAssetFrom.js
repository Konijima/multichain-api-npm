"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SendAssetFrom(...params) {
    return params.length === 0 ? { method: 'sendassetfrom' } : { method: 'sendassetfrom', params };
}
exports.SendAssetFrom = SendAssetFrom;
