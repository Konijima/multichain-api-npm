import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *combineunspent* command.
 */
export interface CombineUnspentRequest extends RpcRequest {
    readonly method: 'combineunspent';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *combineunspent* command.
 */
export interface CombineUnspentResponse extends RpcResponse {
    readonly result: CombineUnspentResult | null;
}
/**
 * Result of the *combineunspent* command.
 */
export declare type CombineUnspentResult = any;
export declare function CombineUnspent(...params: any[]): CombineUnspentRequest;
