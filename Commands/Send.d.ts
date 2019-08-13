import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *send* command.
 */
export interface SendRequest extends RpcRequest {
    readonly method: 'send';
    readonly params: [string, number, string | undefined, string | undefined];
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
 * Send an amount (or several asset amounts) to a given address. The amount is
 * a real and is rounded to the nearest 0.00000001
 * @param to The address to send to.
 * @param nativeAmount The amount in native currency to send. eg 0.1
 * @param comment A comment used to store what the transaction is for.
 * @param recipient A comment to store the name of the person or organization
 * @returns A JSON-RPC request for the *send* command.
 */
export declare function Send(to: string, nativeAmount: number, comment?: string, recipient?: string): SendRequest;
