import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getrawmempool* command.
 */
export interface GetRawMemPoolRequest extends RpcRequest {
    readonly method: 'getrawmempool';
    readonly params?: [boolean];
}
/**
 * JSON-RPC response for the *getrawmempool* command.
 */
export interface GetRawMemPoolResponse extends RpcResponse {
    readonly result: GetRawMemPoolResult | null;
}
/**
 * Result of the *getrawmempool* command.
 */
export declare type GetRawMemPoolResult = any;
/**
 * Returns all transaction ids in memory pool as a json array of string transaction ids.
 * @returns A JSON-RPC request for the *getrawmempool* command.
 */
export declare function GetRawMemPool(verbose?: boolean): GetRawMemPoolRequest;
