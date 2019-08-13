import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *listassets* command.
 */
export interface ListAssetsRequest extends RpcRequest {
    readonly method: 'listassets';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *listassets* command.
 */
export interface ListAssetsResponse extends RpcResponse {
    readonly result: ListAssetsResult | null;
}
/**
 * Result of the *listassets* command.
 */
export declare type ListAssetsResult = any;
export declare function ListAssets(...params: any[]): ListAssetsRequest;
