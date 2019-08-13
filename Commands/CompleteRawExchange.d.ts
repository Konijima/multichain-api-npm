import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *completerawexchange* command.
 */
export interface CompleteRawExchangeRequest extends RpcRequest {
    readonly method: 'completerawexchange';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *completerawexchange* command.
 */
export interface CompleteRawExchangeResponse extends RpcResponse {
    readonly result: CompleteRawExchangeResult | null;
}
/**
 * Result of the *completerawexchange* command.
 */
export declare type CompleteRawExchangeResult = any;
export declare function CompleteRawExchange(...params: any[]): CompleteRawExchangeRequest;
