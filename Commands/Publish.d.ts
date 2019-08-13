import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *publish* command.
 */
export interface PublishRequest extends RpcRequest {
    readonly method: 'publish';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *publish* command.
 */
export interface PublishResponse extends RpcResponse {
    readonly result: PublishResult | null;
}
/**
 * Result of the *publish* command.
 */
export declare type PublishResult = any;
export declare function Publish(...params: any[]): PublishRequest;
