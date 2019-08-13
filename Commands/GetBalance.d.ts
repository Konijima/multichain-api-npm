import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getbalance* command.
 */
export interface GetBalanceRequest extends RpcRequest {
    readonly method: 'getbalance';
    readonly params?: undefined;
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
 * @returns A JSON-RPC request for the *getbalance* command.
 */
export declare function GetBalance(): GetBalanceRequest;
