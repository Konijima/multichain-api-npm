"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAddresses(verbose) {
    return verbose === undefined ? { method: 'getaddresses' } : { method: 'getaddresses', params: [verbose] };
}
exports.GetAddresses = GetAddresses;
