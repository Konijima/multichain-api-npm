import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *signrawtransaction* command.
 */
export interface SignRawTransactionRequest extends RpcRequest {
    readonly method: 'signrawtransaction';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *signrawtransaction* command.
 */
export interface SignRawTransactionResponse extends RpcResponse {
    readonly result: SignRawTransactionResult | null;
}
/**
 * Result of the *signrawtransaction* command.
 */
export declare type SignRawTransactionResult = any;
export declare function SignRawTransaction(...params: any[]): SignRawTransactionRequest;
