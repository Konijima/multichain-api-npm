import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *ping* command.
 */
export interface PingRequest extends RpcRequest {
    readonly method: 'ping';
}
/**
 * JSON-RPC response for the *ping* command.
 */
export interface PingResponse extends RpcResponse {
    readonly result: PingResult | null;
}
/**
 * Result of the *ping* command.
 */
export declare type PingResult = any;
export declare function Ping(): PingRequest;
