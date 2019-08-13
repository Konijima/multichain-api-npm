import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *dumpwallet* command.
 */
export interface DumpWalletRequest extends RpcRequest {
    readonly method: 'dumpwallet';
    readonly params: [string];
}
/**
 * JSON-RPC response for the *dumpwallet* command.
 */
export interface DumpWalletResponse extends RpcResponse {
    readonly result: DumpWalletResult | null;
}
/**
 * Result of the *dumpwallet* command.
 */
export declare type DumpWalletResult = any;
/**
 * Dumps all wallet keys in a human-readable format.
 * @param filename The filename.
 * @returns A JSON-RPC request for the *dumpwallet* command.
 */
export declare function DumpWallet(filename: string): DumpWalletRequest;
