import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getbalance* command.
 */
export interface GetBalanceRequest extends RpcRequest {
    readonly method: 'getbalance';
    readonly params?: [string | undefined, number | undefined];
}
/**
 * JSON-RPC response for the *getbalance* command.
 */
export interface GetBalanceResponse extends RpcResponse {
    readonly result: GetBalanceResult | null;
}
/**
 * Result of the *getbalance* command.
 */
export declare type GetBalanceResult = any;
/**
 * If account is not specified, returns the server's total available balance.
 * If account is specified, returns the balance in the account.
 * Note that the account "" is not the same as leaving the parameter out.
 * The server total may be different to the balance in the default "" account.
 * @param account The selected account, or "*" for entire wallet. It may be the default account using "".
 * @param confirmations Only include transactions confirmed at least this many times.
 * @returns A JSON-RPC request for the *getbalance* command.
 */
export declare function GetBalance(account?: string, confirmations?: number): GetBalanceRequest;
