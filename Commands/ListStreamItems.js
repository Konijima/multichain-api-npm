"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListStreamItems(...params) {
    return params.length === 0 ? { method: 'liststreamitems' } : { method: 'liststreamitems', params };
}
exports.ListStreamItems = ListStreamItems;
