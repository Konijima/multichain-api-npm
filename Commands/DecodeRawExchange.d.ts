import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *decoderawexchange* command.
 */
export interface DecodeRawExchangeRequest extends RpcRequest {
    readonly method: 'decoderawexchange';
    readonly params: [string, boolean | undefined];
}
/**
 * JSON-RPC response for the *decoderawexchange* command.
 */
export interface DecodeRawExchangeResponse extends RpcResponse {
    readonly result: DecodeRawExchangeResult | null;
}
/**
 * Result of the *decoderawexchange* command.
 */
export declare type DecodeRawExchangeResult = any;
export declare function DecodeRawExchange(transaction: string, verbose?: boolean): DecodeRawExchangeRequest;
