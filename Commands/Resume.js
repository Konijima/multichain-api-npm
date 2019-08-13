"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Resumes local mining or the processing of incoming transactions and blocks.
 * @param tasks Task(s) to be resumed. Possible values: incoming,mining,offchain.
 * @returns A JSON-RPC request for the *resume* command.
 */
function Resume(tasks) {
    return { method: 'resume', params: [tasks] };
}
exports.Resume = Resume;
