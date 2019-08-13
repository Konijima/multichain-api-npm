"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListStreamPublisherItems(...params) {
    return params.length === 0 ? { method: 'liststreampublisheritems' } : { method: 'liststreampublisheritems', params };
}
exports.ListStreamPublisherItems = ListStreamPublisherItems;
