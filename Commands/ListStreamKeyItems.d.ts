import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *liststreamkeyitems* command.
 */
export interface ListStreamKeyItemsRequest extends RpcRequest {
    readonly method: 'liststreamkeyitems';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *liststreamkeyitems* command.
 */
export interface ListStreamKeyItemsResponse extends RpcResponse {
    readonly result: ListStreamKeyItemsResult | null;
}
/**
 * Result of the *liststreamkeyitems* command.
 */
export declare type ListStreamKeyItemsResult = any;
export declare function ListStreamKeyItems(...params: any[]): ListStreamKeyItemsRequest;
