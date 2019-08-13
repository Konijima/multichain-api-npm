import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *issuefrom* command.
 */
export interface IssueFromRequest extends RpcRequest {
    readonly method: 'issuefrom';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *issuefrom* command.
 */
export interface IssueFromResponse extends RpcResponse {
    readonly result: IssueFromResult | null;
}
/**
 * Result of the *issuefrom* command.
 */
export declare type IssueFromResult = any;
export declare function IssueFrom(...params: any[]): IssueFromRequest;
