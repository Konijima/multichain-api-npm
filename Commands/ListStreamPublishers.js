"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListStreamPublishers(...params) {
    return params.length === 0 ? { method: 'liststreampublishers' } : { method: 'liststreampublishers', params };
}
exports.ListStreamPublishers = ListStreamPublishers;
