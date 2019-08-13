import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *liststreampublishers* command.
 */
export interface ListStreamPublishersRequest extends RpcRequest {
    readonly method: 'liststreampublishers';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *liststreampublishers* command.
 */
export interface ListStreamPublishersResponse extends RpcResponse {
    readonly result: ListStreamPublishersResult | null;
}
/**
 * Result of the *liststreampublishers* command.
 */
export declare type ListStreamPublishersResult = any;
export declare function ListStreamPublishers(...params: any[]): ListStreamPublishersRequest;
