"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Manages the peer-to-peer connections:
 * * The `"add"` command queues the specified node for the next available slot;
 * * The `"remove"` command removes the connection to the specified node;
 * * The `"onetry"` command adds a connection to the specified node, whether a slot is available or not.
 * @param host IP address or hostname of the node, optionally including a port number.
 * @param command Command name.
 * @returns A JSON-RPC request for the *addnode* command.
 */
function AddNode(host, command) {
    return { method: 'addnode', params: [host, command] };
}
exports.AddNode = AddNode;
