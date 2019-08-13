import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *unsubscribe* command.
 */
export interface UnsubscribeRequest extends RpcRequest {
    readonly method: 'unsubscribe';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *unsubscribe* command.
 */
export interface UnsubscribeResponse extends RpcResponse {
    readonly result: UnsubscribeResult | null;
}
/**
 * Result of the *unsubscribe* command.
 */
export declare type UnsubscribeResult = any;
export declare function Unsubscribe(...params: any[]): UnsubscribeRequest;
