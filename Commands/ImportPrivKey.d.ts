import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *importprivkey* command.
 */
export interface ImportPrivKeyRequest extends RpcRequest {
    readonly method: 'importprivkey';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *importprivkey* command.
 */
export interface ImportPrivKeyResponse extends RpcResponse {
    readonly result: ImportPrivKeyResult | null;
}
/**
 * Result of the *importprivkey* command.
 */
export declare type ImportPrivKeyResult = any;
export declare function ImportPrivKey(...params: any[]): ImportPrivKeyRequest;
