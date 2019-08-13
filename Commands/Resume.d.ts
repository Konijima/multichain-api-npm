import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *resume* command.
 */
export interface ResumeRequest extends RpcRequest {
    readonly method: 'resume';
    readonly params: [string];
}
/**
 * JSON-RPC response for the *resume* command.
 */
export interface ResumeResponse extends RpcResponse {
    readonly result: ResumeResult | null;
}
/**
 * Result of the *resume* command.
 */
export declare type ResumeResult = any;
/**
 * Resumes local mining or the processing of incoming transactions and blocks.
 * @param tasks Task(s) to be resumed. Possible values: incoming,mining,offchain.
 * @returns A JSON-RPC request for the *resume* command.
 */
export declare function Resume(tasks: string): ResumeRequest;
