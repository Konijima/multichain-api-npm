import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getinfo* command.
 */
export interface GetInfoRequest extends RpcRequest {
    readonly method: 'getinfo';
    readonly params?: undefined;
}
/**
 * JSON-RPC response for the *getinfo* command.
 */
export interface GetInfoResponse extends RpcResponse {
    readonly result: GetInfoResult | null;
}
/**
 * Result of the *getinfo* command.
 */
export interface GetInfoResult {
    version: number;
    protocolversion: number;
    chainname: string;
    description: string;
    protocol: string;
    port: number;
    setupblocks: string;
    walletversion: number;
    balance: number;
    walletdbversion: number;
    blocks: number;
    timeoffset: number;
    connections: number;
    proxy: string;
    difficulty: number;
    testnet: boolean;
    keypoololdest: number;
    keypoolsize: number;
    unlocked_until: number;
    paytxfee: number;
    relayfee: number;
    errors: string;
}
/**
 * Returns general information about this node and blockchain.
 * @returns A JSON-RPC request for the *getinfo* command.
 */
export declare function GetInfo(): GetInfoRequest;
