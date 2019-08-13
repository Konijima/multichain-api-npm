import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *dumpprivkey* command.
 */
export interface DumpPrivKeyRequest extends RpcRequest {
    readonly method: 'dumpprivkey';
    readonly params: [string];
}
/**
 * JSON-RPC response for the *dumpprivkey* command.
 */
export interface DumpPrivKeyResponse extends RpcResponse {
    readonly result: DumpPrivKeyResult | null;
}
/**
 * Result of the *dumpprivkey* command.
 */
export declare type DumpPrivKeyResult = any;
/**
 * Reveals the private key corresponding to 'address'.
 * Then the importprivkey can be used with this output
 * @param address The MultiChain address for the private key.
 * @returns A JSON-RPC request for the *dumpprivkey* command.
 */
export declare function DumpPrivKey(address: string): DumpPrivKeyRequest;
