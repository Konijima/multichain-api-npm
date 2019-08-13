import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *walletpassphrase* command.
 */
export interface WalletPassphraseRequest extends RpcRequest {
    readonly method: 'walletpassphrase';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *walletpassphrase* command.
 */
export interface WalletPassphraseResponse extends RpcResponse {
    readonly result: WalletPassphraseResult | null;
}
/**
 * Result of the *walletpassphrase* command.
 */
export declare type WalletPassphraseResult = any;
export declare function WalletPassphrase(...params: any[]): WalletPassphraseRequest;
