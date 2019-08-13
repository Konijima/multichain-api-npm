import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *liststreampublisheritems* command.
 */
export interface ListStreamPublisherItemsRequest extends RpcRequest {
    readonly method: 'liststreampublisheritems';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *liststreampublisheritems* command.
 */
export interface ListStreamPublisherItemsResponse extends RpcResponse {
    readonly result: ListStreamPublisherItemsResult | null;
}
/**
 * Result of the *liststreampublisheritems* command.
 */
export declare type ListStreamPublisherItemsResult = any;
export declare function ListStreamPublisherItems(...params: any[]): ListStreamPublisherItemsRequest;
