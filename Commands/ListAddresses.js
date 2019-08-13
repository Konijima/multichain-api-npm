"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListAddresses(...params) {
    return params.length === 0 ? { method: 'listaddresses' } : { method: 'listaddresses', params };
}
exports.ListAddresses = ListAddresses;
