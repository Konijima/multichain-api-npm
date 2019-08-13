import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *listassettransactions* command.
 */
export interface ListAssetTransactionsRequest extends RpcRequest {
    readonly method: 'listassettransactions';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *listassettransactions* command.
 */
export interface ListAssetTransactionsResponse extends RpcResponse {
    readonly result: ListAssetTransactionsResult | null;
}
/**
 * Result of the *listassettransactions* command.
 */
export declare type ListAssetTransactionsResult = any;
export declare function ListAssetTransactions(...params: any[]): ListAssetTransactionsRequest;
