import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *walletlock* command.
 */
export interface WalletLockRequest extends RpcRequest {
    readonly method: 'walletlock';
}
/**
 * JSON-RPC response for the *walletlock* command.
 */
export interface WalletLockResponse extends RpcResponse {
    readonly result: WalletLockResult | null;
}
/**
 * Result of the *walletlock* command.
 */
export declare type WalletLockResult = any;
export declare function WalletLock(): WalletLockRequest;
