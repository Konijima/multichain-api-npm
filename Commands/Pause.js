"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pauses local mining or the processing of incoming transactions and blocks.
 * @param tasks Task(s) to be paused. Possible values: incoming,mining,offchain.
 * @returns A JSON-RPC request for the *pause* command.
 */
function Pause(tasks) {
    return { method: 'pause', params: [tasks] };
}
exports.Pause = Pause;
