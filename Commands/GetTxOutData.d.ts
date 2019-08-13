import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *gettxoutdata* command.
 */
export interface GetTxOutDataRequest extends RpcRequest {
    readonly method: 'gettxoutdata';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *gettxoutdata* command.
 */
export interface GetTxOutDataResponse extends RpcResponse {
    readonly result: GetTxOutDataResult | null;
}
/**
 * Result of the *gettxoutdata* command.
 */
export declare type GetTxOutDataResult = any;
export declare function GetTxOutData(...params: any[]): GetTxOutDataRequest;
