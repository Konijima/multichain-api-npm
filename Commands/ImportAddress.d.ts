import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *importaddress* command.
 */
export interface ImportAddressRequest extends RpcRequest {
    readonly method: 'importaddress';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *importaddress* command.
 */
export interface ImportAddressResponse extends RpcResponse {
    readonly result: ImportAddressResult | null;
}
/**
 * Result of the *importaddress* command.
 */
export declare type ImportAddressResult = any;
export declare function ImportAddress(...params: any[]): ImportAddressRequest;
