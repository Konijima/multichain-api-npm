import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *clearmempool* command.
 */
export interface ClearMemPoolRequest extends RpcRequest {
    readonly method: 'clearmempool';
    readonly params?: undefined;
}
/**
 * JSON-RPC response for the *clearmempool* command.
 */
export interface ClearMemPoolResponse extends RpcResponse {
    readonly result: ClearMemPoolResult | null;
}
/**
 * Result of the *clearmempool* command.
 */
export declare type ClearMemPoolResult = any;
/**
 * Removes all transactions from the TX memory pool.
 * Local mining and the processing of incoming transactions and blocks should
 * be paused.
 * @returns A JSON-RPC request for the *clearmempool* command.
 */
export declare function ClearMemPool(): ClearMemPoolRequest;
