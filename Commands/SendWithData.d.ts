import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *sendwithdata* command.
 */
export interface SendWithDataRequest extends RpcRequest {
    readonly method: 'sendwithdata';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *sendwithdata* command.
 */
export interface SendWithDataResponse extends RpcResponse {
    readonly result: SendWithDataResult | null;
}
/**
 * Result of the *sendwithdata* command.
 */
export declare type SendWithDataResult = any;
export declare function SendWithData(...params: any[]): SendWithDataRequest;
