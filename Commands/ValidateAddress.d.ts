import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *validateaddress* command.
 */
export interface ValidateAddressRequest extends RpcRequest {
    readonly method: 'validateaddress';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *validateaddress* command.
 */
export interface ValidateAddressResponse extends RpcResponse {
    readonly result: ValidateAddressResult | null;
}
/**
 * Result of the *validateaddress* command.
 */
export declare type ValidateAddressResult = any;
export declare function ValidateAddress(...params: any[]): ValidateAddressRequest;
