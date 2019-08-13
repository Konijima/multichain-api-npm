import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *appendrawtransaction* command.
 */
export interface AppendRawTransactionRequest extends RpcRequest {
    readonly method: 'appendrawtransaction';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *appendrawtransaction* command.
 */
export interface AppendRawTransactionResponse extends RpcResponse {
    readonly result: AppendRawTransactionResult | null;
}
/**
 * Result of the *appendrawtransaction* command.
 */
export declare type AppendRawTransactionResult = any;
export declare function AppendRawTransaction(...params: any[]): AppendRawTransactionRequest;
