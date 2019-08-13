import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *revokefrom* command.
 */
export interface RevokeFromRequest extends RpcRequest {
    readonly method: 'revokefrom';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *revokefrom* command.
 */
export interface RevokeFromResponse extends RpcResponse {
    readonly result: RevokeFromResult | null;
}
/**
 * Result of the *revokefrom* command.
 */
export declare type RevokeFromResult = any;
export declare function RevokeFrom(...params: any[]): RevokeFromRequest;
