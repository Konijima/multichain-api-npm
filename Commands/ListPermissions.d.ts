import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *listpermissions* command.
 */
export interface ListPermissionsRequest extends RpcRequest {
    readonly method: 'listpermissions';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *listpermissions* command.
 */
export interface ListPermissionsResponse extends RpcResponse {
    readonly result: ListPermissionsResult | null;
}
/**
 * Result of the *listpermissions* command.
 */
export declare type ListPermissionsResult = any;
export declare function ListPermissions(...params: any[]): ListPermissionsRequest;
