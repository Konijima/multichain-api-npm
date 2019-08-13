import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getblock* command.
 */
export interface GetBlockRequest extends RpcRequest {
    readonly method: 'getblock';
    readonly params: [string | number, boolean | number | undefined];
}
/**
 * JSON-RPC response for the *getblock* command.
 */
export interface GetBlockResponse extends RpcResponse {
    readonly result: GetBlockResult | null;
}
/**
 * Result of the *getblock* command.
 */
export declare type GetBlockResult = any;
/**
 * Returns hex-encoded data or json object for block.
 * @param block The block hash or The block height in active chain.
 * @param verbose If true, returns more information.
 * @returns A JSON-RPC request for the *getblock* command.
 */
export declare function GetBlock(block: string | number, verbose?: boolean | number): GetBlockRequest;
