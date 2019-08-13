import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *grantfrom* command.
 */
export interface GrantFromRequest extends RpcRequest {
    readonly method: 'grantfrom';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *grantfrom* command.
 */
export interface GrantFromResponse extends RpcResponse {
    readonly result: GrantFromResult | null;
}
/**
 * Result of the *grantfrom* command.
 */
export declare type GrantFromResult = any;
export declare function GrantFrom(...params: any[]): GrantFromRequest;
