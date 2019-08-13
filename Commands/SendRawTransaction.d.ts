import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *sendrawtransaction* command.
 */
export interface SendRawTransactionRequest extends RpcRequest {
    readonly method: 'sendrawtransaction';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *sendrawtransaction* command.
 */
export interface SendRawTransactionResponse extends RpcResponse {
    readonly result: SendRawTransactionResult | null;
}
/**
 * Result of the *sendrawtransaction* command.
 */
export declare type SendRawTransactionResult = any;
export declare function SendRawTransaction(...params: any[]): SendRawTransactionRequest;
