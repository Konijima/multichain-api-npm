import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *verifymessage* command.
 */
export interface VerifyMessageRequest extends RpcRequest {
    readonly method: 'verifymessage';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *verifymessage* command.
 */
export interface VerifyMessageResponse extends RpcResponse {
    readonly result: VerifyMessageResult | null;
}
/**
 * Result of the *verifymessage* command.
 */
export declare type VerifyMessageResult = any;
export declare function VerifyMessage(...params: any[]): VerifyMessageRequest;
