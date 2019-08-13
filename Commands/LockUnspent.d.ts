import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *lockunspent* command.
 */
export interface LockUnspentRequest extends RpcRequest {
    readonly method: 'lockunspent';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *lockunspent* command.
 */
export interface LockUnspentResponse extends RpcResponse {
    readonly result: LockUnspentResult | null;
}
/**
 * Result of the *lockunspent* command.
 */
export declare type LockUnspentResult = any;
export declare function LockUnspent(...params: any[]): LockUnspentRequest;
