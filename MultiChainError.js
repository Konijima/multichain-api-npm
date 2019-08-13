"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Error thrown by an [[RpcClientInstance]] when the invoked command returns an error.
 */
class MultiChainError extends Error {
    /**
     * Creates an instance of [[MultiChainError]].
     * @param response The RPC response of the invoked command.
     */
    constructor(response) {
        super();
        this.response = response;
        if (response.error === null)
            throw new Error('The RPC response does not contain an error.');
        this.message = `[${response.error.code}] ${response.error.message}`;
    }
}
exports.MultiChainError = MultiChainError;
