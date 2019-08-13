"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListStreamKeys(...params) {
    return params.length === 0 ? { method: 'liststreamkeys' } : { method: 'liststreamkeys', params };
}
exports.ListStreamKeys = ListStreamKeys;
