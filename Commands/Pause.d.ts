import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *pause* command.
 */
export interface PauseRequest extends RpcRequest {
    readonly method: 'pause';
    readonly params: [string];
}
/**
 * JSON-RPC response for the *pause* command.
 */
export interface PauseResponse extends RpcResponse {
    readonly result: PauseResult | null;
}
/**
 * Result of the *pause* command.
 */
export declare type PauseResult = any;
/**
 * Pauses local mining or the processing of incoming transactions and blocks.
 * @param tasks Task(s) to be paused. Possible values: incoming,mining,offchain.
 * @returns A JSON-RPC request for the *pause* command.
 */
export declare function Pause(tasks: string): PauseRequest;
