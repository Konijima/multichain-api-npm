import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getnetworkinfo* command.
 */
export interface GetNetworkInfoRequest extends RpcRequest {
    readonly method: 'getnetworkinfo';
    readonly params?: undefined;
}
/**
 * JSON-RPC response for the *getnetworkinfo* command.
 */
export interface GetNetworkInfoResponse extends RpcResponse {
    readonly result: GetNetworkInfoResult | null;
}
/**
 * Result of the *getnetworkinfo* command.
 */
export interface GetNetworkInfoResult {
    version: number;
    subversion: string;
    protocolversion: number;
    localservices: string;
    timeoffset: number;
    connections: number;
    networks: any[];
    relayfee: number;
    localaddresses: any[];
}
/**
 * Returns an object containing various state info regarding P2P networking.
 * @returns A JSON-RPC request for the *getnetworkinfo* command.
 */
export declare function GetNetworkInfo(): GetNetworkInfoRequest;
