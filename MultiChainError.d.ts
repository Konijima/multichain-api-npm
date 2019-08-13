import { RpcResponse } from './RpcResponse';
/**
 * Error thrown by an [[RpcClientInstance]] when the invoked command returns an error.
 */
export declare class MultiChainError extends Error {
    readonly response: RpcResponse;
    /**
     * Creates an instance of [[MultiChainError]].
     * @param response The RPC response of the invoked command.
     */
    constructor(response: RpcResponse);
}
