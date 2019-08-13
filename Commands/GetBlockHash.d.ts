import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getblockhash* command.
 */
export interface GetBlockHashRequest extends RpcRequest {
    readonly method: 'getblockhash';
    readonly params: [number];
}
/**
 * JSON-RPC response for the *getblockhash* command.
 */
export interface GetBlockHashResponse extends RpcResponse {
    readonly result: GetBlockHashResult | null;
}
/**
 * Result of the *getblockhash* command.
 */
export declare type GetBlockHashResult = any;
export declare function GetBlockHash(height: number): GetBlockHashRequest;
