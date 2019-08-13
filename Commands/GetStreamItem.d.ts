import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getstreamitem* command.
 */
export interface GetStreamItemRequest extends RpcRequest {
    readonly method: 'getstreamitem';
    readonly params: [string, string, boolean | undefined];
}
/**
 * JSON-RPC response for the *getstreamitem* command.
 */
export interface GetStreamItemResponse extends RpcResponse {
    readonly result: GetStreamItemResult | null;
}
/**
 * Result of the *getstreamitem* command.
 */
export declare type GetStreamItemResult = any;
export declare function GetStreamItem(stream: string, txId: string, verbose?: boolean): GetStreamItemRequest;
