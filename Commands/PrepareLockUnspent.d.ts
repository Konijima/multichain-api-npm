import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *preparelockunspent* command.
 */
export interface PrepareLockUnspentRequest extends RpcRequest {
    readonly method: 'preparelockunspent';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *preparelockunspent* command.
 */
export interface PrepareLockUnspentResponse extends RpcResponse {
    readonly result: PrepareLockUnspentResult | null;
}
/**
 * Result of the *preparelockunspent* command.
 */
export declare type PrepareLockUnspentResult = any;
export declare function PrepareLockUnspent(...params: any[]): PrepareLockUnspentRequest;
