import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *revoke* command.
 */
export interface RevokeRequest extends RpcRequest {
    readonly method: 'revoke';
    readonly params: [string, string, number | undefined, string | undefined, string | undefined];
}
/**
 * JSON-RPC response for the *revoke* command.
 */
export interface RevokeResponse extends RpcResponse {
    readonly result: RevokeResult | null;
}
/**
 * Result of the *revoke* command.
 */
export declare type RevokeResult = any;
/**
 * Revoke permission from a given address. The amount is a real
 * @param to The addresses(es) to revoke permissions from.
 * @param permissions Permission strings, comma delimited.
 * @param nativeAmount Native currency amount to send. eg 0.1. Default - 0.
 * @param comment A comment used to store what the transaction is for.
 * @param recipient A comment to store the name of the person or organization
 * @returns A JSON-RPC request for the *revoke* command.
 */
export declare function Revoke(to: string, permissions: string, nativeAmount?: number, comment?: string, recipient?: string): RevokeRequest;
