"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Error thrown by an [[RpcClientInstance]], if parsing the body of the response failed.
 */
class RpcError extends Error {
    /**
     * Creates an instance of [[RpcError]].
     * @param status Status code of the HTTP response.
     * @param statusText Status text of the HTTP response.
     * @param headers Headers of the HTTP response.
     * @param body Body of the HTTP response.
     */
    constructor(status, statusText, headers, body) {
        super(`${status} ${statusText}`);
        this.status = status;
        this.statusText = statusText;
        this.headers = headers;
        this.body = body;
    }
}
exports.RpcError = RpcError;
