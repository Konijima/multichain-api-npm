import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *send* command.
 */
export interface SendRequest extends RpcRequest {
    readonly method: 'send';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *send* command.
 */
export interface SendResponse extends RpcResponse {
    readonly result: SendResult | null;
}
/**
 * Result of the *send* command.
 */
export declare type SendResult = any;
/**
 * Send an amount (or several asset amounts) to a given address.
 * @returns A JSON-RPC request for the *send* command.
 */
export declare function Send(...params: any[]): SendRequest;
