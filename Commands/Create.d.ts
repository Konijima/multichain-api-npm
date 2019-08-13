import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *create* command.
 */
export interface CreateRequest extends RpcRequest {
    readonly method: 'create';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *create* command.
 */
export interface CreateResponse extends RpcResponse {
    readonly result: CreateResult | null;
}
/**
 * Result of the *create* command.
 */
export declare type CreateResult = any;
export declare function Create(...params: any[]): CreateRequest;
