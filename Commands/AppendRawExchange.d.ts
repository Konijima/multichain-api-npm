import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *appendrawexchange* command.
 */
export interface AppendRawExchangeRequest extends RpcRequest {
    readonly method: 'appendrawexchange';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *appendrawexchange* command.
 */
export interface AppendRawExchangeResponse extends RpcResponse {
    readonly result: AppendRawExchangeResult | null;
}
/**
 * Result of the *appendrawexchange* command.
 */
export declare type AppendRawExchangeResult = any;
export declare function AppendRawExchange(...params: any[]): AppendRawExchangeRequest;
