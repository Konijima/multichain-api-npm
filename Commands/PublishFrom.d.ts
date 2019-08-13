import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *publishfrom* command.
 */
export interface PublishFromRequest extends RpcRequest {
    readonly method: 'publishfrom';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *publishfrom* command.
 */
export interface PublishFromResponse extends RpcResponse {
    readonly result: PublishFromResult | null;
}
/**
 * Result of the *publishfrom* command.
 */
export declare type PublishFromResult = any;
export declare function PublishFrom(...params: any[]): PublishFromRequest;
