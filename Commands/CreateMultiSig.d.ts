import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *createmultisig* command.
 */
export interface CreateMultiSigRequest extends RpcRequest {
    readonly method: 'createmultisig';
    readonly params: [number, string[]];
}
/**
 * JSON-RPC response for the *createmultisig* command.
 */
export interface CreateMultiSigResponse extends RpcResponse {
    readonly result: CreateMultiSigResult | null;
}
/**
 * Result of the *createmultisig* command.
 */
export declare type CreateMultiSigResult = any;
export declare function CreateMultiSig(requiredSignatures: number, keys: string[]): CreateMultiSigRequest;
