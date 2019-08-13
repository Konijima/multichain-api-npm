import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getwallettransaction* command.
 */
export interface GetWalletTransactionRequest extends RpcRequest {
    readonly method: 'getwallettransaction';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *getwallettransaction* command.
 */
export interface GetWalletTransactionResponse extends RpcResponse {
    readonly result: GetWalletTransactionResult | null;
}
/**
 * Result of the *getwallettransaction* command.
 */
export declare type GetWalletTransactionResult = any;
export declare function GetWalletTransaction(...params: any[]): GetWalletTransactionRequest;
