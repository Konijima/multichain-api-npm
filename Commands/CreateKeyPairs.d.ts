import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *createkeypairs* command.
 */
export interface CreateKeyPairsRequest extends RpcRequest {
    readonly method: 'createkeypairs';
    readonly params?: [number];
}
/**
 * JSON-RPC response for the *createkeypairs* command.
 */
export interface CreateKeyPairsResponse extends RpcResponse {
    readonly result: CreateKeyPairsResult | null;
}
/**
 * Result of the *createkeypairs* command.
 */
export declare type CreateKeyPairsResult = any;
/**
 * Creates public/private key pairs. These key pairs are not stored in the
 * wallet.
 * @param count Number of pairs to create.
 * @returns A JSON-RPC request for the *createkeypairs* command.
 */
export declare function CreateKeyPairs(count?: number): CreateKeyPairsRequest;
