import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *sendasset* command.
 */
export interface SendAssetRequest extends RpcRequest {
    readonly method: 'sendasset';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *sendasset* command.
 */
export interface SendAssetResponse extends RpcResponse {
    readonly result: SendAssetResult | null;
}
/**
 * Result of the *sendasset* command.
 */
export declare type SendAssetResult = any;
export declare function SendAsset(...params: any[]): SendAssetRequest;
