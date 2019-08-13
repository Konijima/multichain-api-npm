import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *listblocks* command.
 */
export interface ListBlocksRequest extends RpcRequest {
    readonly method: 'listblocks';
    readonly params: [string | any[], boolean | undefined];
}
/**
 * JSON-RPC response for the *listblocks* command.
 */
export interface ListBlocksResponse extends RpcResponse {
    readonly result: ListBlocksResult | null;
}
/**
 * Result of the *listblocks* command.
 */
export declare type ListBlocksResult = any;
/**
 * Returns list of block information objects
 * @param blocks Comma delimited list of block identifiers
 *               A json array of block identifiers
 * @param verbose If true, returns more information.
 * @returns A JSON-RPC request for the *listblocks* command.
 */
export declare function ListBlocks(blocks: string | any[], verbose?: boolean): ListBlocksRequest;
