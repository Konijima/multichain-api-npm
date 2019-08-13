"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Help(command) {
    return command === undefined ? { method: 'help' } : { method: 'help', params: [command] };
}
exports.Help = Help;
