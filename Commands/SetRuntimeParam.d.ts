import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *setruntimeparam* command.
 */
export interface SetRuntimeParamRequest extends RpcRequest {
    readonly method: 'setruntimeparam';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *setruntimeparam* command.
 */
export interface SetRuntimeParamResponse extends RpcResponse {
    readonly result: SetRuntimeParamResult | null;
}
/**
 * Result of the *setruntimeparam* command.
 */
export declare type SetRuntimeParamResult = any;
export declare function SetRuntimeParam(...params: any[]): SetRuntimeParamRequest;
