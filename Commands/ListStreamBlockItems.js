"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListStreamBlockItems(...params) {
    return params.length === 0 ? { method: 'liststreamblockitems' } : { method: 'liststreamblockitems', params };
}
exports.ListStreamBlockItems = ListStreamBlockItems;
