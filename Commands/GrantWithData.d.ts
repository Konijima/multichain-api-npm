import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *grantwithdata* command.
 */
export interface GrantWithDataRequest extends RpcRequest {
    readonly method: 'grantwithdata';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *grantwithdata* command.
 */
export interface GrantWithDataResponse extends RpcResponse {
    readonly result: GrantWithDataResult | null;
}
/**
 * Result of the *grantwithdata* command.
 */
export declare type GrantWithDataResult = any;
export declare function GrantWithData(...params: any[]): GrantWithDataRequest;
