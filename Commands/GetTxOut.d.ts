import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *gettxout* command.
 */
export interface GetTxOutRequest extends RpcRequest {
    readonly method: 'gettxout';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *gettxout* command.
 */
export interface GetTxOutResponse extends RpcResponse {
    readonly result: GetTxOutResult | null;
}
/**
 * Result of the *gettxout* command.
 */
export declare type GetTxOutResult = any;
export declare function GetTxOut(...params: any[]): GetTxOutRequest;
