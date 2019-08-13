import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *grant* command.
 */
export interface GrantRequest extends RpcRequest {
    readonly method: 'grant';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *grant* command.
 */
export interface GrantResponse extends RpcResponse {
    readonly result: GrantResult | null;
}
/**
 * Result of the *grant* command.
 */
export declare type GrantResult = any;
export declare function Grant(...params: any[]): GrantRequest;
