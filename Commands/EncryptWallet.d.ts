import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *encryptwallet* command.
 */
export interface EncryptWalletRequest extends RpcRequest {
    readonly method: 'encryptwallet';
    readonly params: [string];
}
/**
 * JSON-RPC response for the *encryptwallet* command.
 */
export interface EncryptWalletResponse extends RpcResponse {
    readonly result: EncryptWalletResult | null;
}
/**
 * Result of the *encryptwallet* command.
 */
export declare type EncryptWalletResult = any;
/**
 * Encrypts the wallet with 'passphrase'. This is for first time encryption.
 * @param passphrase The pass phrase to encrypt the wallet with.
 * @returns A JSON-RPC request for the *encryptwallet* command.
 */
export declare function EncryptWallet(passphrase: string): EncryptWalletRequest;
