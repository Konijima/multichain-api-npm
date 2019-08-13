import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *sendassetfrom* command.
 */
export interface SendAssetFromRequest extends RpcRequest {
    readonly method: 'sendassetfrom';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *sendassetfrom* command.
 */
export interface SendAssetFromResponse extends RpcResponse {
    readonly result: SendAssetFromResult | null;
}
/**
 * Result of the *sendassetfrom* command.
 */
export declare type SendAssetFromResult = any;
export declare function SendAssetFrom(...params: any[]): SendAssetFromRequest;
