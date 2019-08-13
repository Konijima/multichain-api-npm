import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *listunspent* command.
 */
export interface ListUnspentRequest extends RpcRequest {
    readonly method: 'listunspent';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *listunspent* command.
 */
export interface ListUnspentResponse extends RpcResponse {
    readonly result: ListUnspentResult | null;
}
/**
 * Result of the *listunspent* command.
 */
export declare type ListUnspentResult = any;
export declare function ListUnspent(...params: any[]): ListUnspentRequest;
