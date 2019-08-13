/**
 * Error thrown by an [[RpcClientInstance]], if parsing the body of the response failed.
 */
export declare class RpcError extends Error {
    readonly status: number;
    readonly statusText: string;
    readonly headers: object;
    readonly body: string;
    /**
     * Creates an instance of [[RpcError]].
     * @param status Status code of the HTTP response.
     * @param statusText Status text of the HTTP response.
     * @param headers Headers of the HTTP response.
     * @param body Body of the HTTP response.
     */
    constructor(status: number, statusText: string, headers: object, body: string);
}
