import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *liststreams* command.
 */
export interface ListStreamsRequest extends RpcRequest {
    readonly method: 'liststreams';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *liststreams* command.
 */
export interface ListStreamsResponse extends RpcResponse {
    readonly result: ListStreamsResult | null;
}
/**
 * Result of the *liststreams* command.
 */
export declare type ListStreamsResult = any;
export declare function ListStreams(...params: any[]): ListStreamsRequest;
