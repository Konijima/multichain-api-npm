import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getrawtransaction* command.
 */
export interface GetRawTransactionRequest extends RpcRequest {
    readonly method: 'getrawtransaction';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *getrawtransaction* command.
 */
export interface GetRawTransactionResponse extends RpcResponse {
    readonly result: GetRawTransactionResult | null;
}
/**
 * Result of the *getrawtransaction* command.
 */
export declare type GetRawTransactionResult = any;
export declare function GetRawTransaction(...params: any[]): GetRawTransactionRequest;
