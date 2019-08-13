import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *backupwallet* command.
 */
export interface BackupWalletRequest extends RpcRequest {
    readonly method: 'backupwallet';
    readonly params: [string];
}
/**
 * JSON-RPC response for the *backupwallet* command.
 */
export interface BackupWalletResponse extends RpcResponse {
    readonly result: BackupWalletResult | null;
}
/**
 * Result of the *backupwallet* command.
 */
export declare type BackupWalletResult = any;
/**
 * Safely copies wallet.dat to destination, which can be a directory or a path
 * with filename.
 * @param filename The destination directory or file.
 * @returns A JSON-RPC request for the *backupwallet* command.
 */
export declare function BackupWallet(filename: string): BackupWalletRequest;
