import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getmempoolinfo* command.
 */
export interface GetMemPoolInfoRequest extends RpcRequest {
    readonly method: 'getmempoolinfo';
    readonly params?: undefined;
}
/**
 * JSON-RPC response for the *getmempoolinfo* command.
 */
export interface GetMemPoolInfoResponse extends RpcResponse {
    readonly result: GetMemPoolInfoResult | null;
}
/**
 * Result of the *getmempoolinfo* command.
 */
export interface GetMemPoolInfoResult {
    size: number;
    bytes: number;
}
/**
 * Returns details on the active state of the TX memory pool.
 * @returns A JSON-RPC request for the *getmempoolinfo* command.
 */
export declare function GetMemPoolInfo(): GetMemPoolInfoRequest;
