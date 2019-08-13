import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *importwallet* command.
 */
export interface ImportWalletRequest extends RpcRequest {
    readonly method: 'importwallet';
    readonly params: [string];
}
/**
 * JSON-RPC response for the *importwallet* command.
 */
export interface ImportWalletResponse extends RpcResponse {
    readonly result: ImportWalletResult | null;
}
/**
 * Result of the *importwallet* command.
 */
export declare type ImportWalletResult = any;
export declare function ImportWallet(filename: string): ImportWalletRequest;
