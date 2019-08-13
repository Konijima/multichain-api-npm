"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListUpgrades(...params) {
    return params.length === 0 ? { method: 'listupgrades' } : { method: 'listupgrades', params };
}
exports.ListUpgrades = ListUpgrades;
