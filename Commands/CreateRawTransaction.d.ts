import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *createrawtransaction* command.
 */
export interface CreateRawTransactionRequest extends RpcRequest {
    readonly method: 'createrawtransaction';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *createrawtransaction* command.
 */
export interface CreateRawTransactionResponse extends RpcResponse {
    readonly result: CreateRawTransactionResult | null;
}
/**
 * Result of the *createrawtransaction* command.
 */
export declare type CreateRawTransactionResult = any;
export declare function CreateRawTransaction(...params: any[]): CreateRawTransactionRequest;
