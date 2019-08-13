import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getnewaddress* command.
 */
export interface GetNewAddressRequest extends RpcRequest {
    readonly method: 'getnewaddress';
    readonly params?: undefined;
}
/**
 * JSON-RPC response for the *getnewaddress* command.
 */
export interface GetNewAddressResponse extends RpcResponse {
    readonly result: GetNewAddressResult | null;
}
/**
 * Result of the *getnewaddress* command.
 */
export declare type GetNewAddressResult = any;
export declare function GetNewAddress(): GetNewAddressRequest;
