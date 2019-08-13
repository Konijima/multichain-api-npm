"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const https = require("https");
const MultiChainError_1 = require("./MultiChainError");
const RpcError_1 = require("./RpcError");
/**
 * Creates a JSON-RPC client to send commands to MultiChain.
 * @param settings Connection settings.
 * @returns A JSON-RPC client.
 */
function RpcClient(settings) {
    const options = {
        protocol: `${settings.protocol || 'http'}:`,
        host: settings.host || 'localhost',
        port: settings.port || 8570,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        auth: `${settings.username || 'multichainrpc'}:${settings.password}`,
    };
    const SendRequest = options.protocol === 'http:' ? http.request : https.request;
    return (request) => {
        return new Promise((resolve, reject) => {
            function HandleMessage(message) {
                let body = '';
                message
                    .setEncoding('utf8')
                    .on('data', chunk => body += chunk)
                    .on('error', reject)
                    .on('end', () => HandleResponse(message, body));
            }
            function HandleResponse(message, body) {
                let response;
                try {
                    response = JSON.parse(body);
                }
                catch (error) {
                    reject(new RpcError_1.RpcError(Number(message.statusCode), String(message.statusMessage), message.headers, body));
                    return;
                }
                if (response.error !== null) {
                    reject(new MultiChainError_1.MultiChainError(response));
                    return;
                }
                resolve(response);
            }
            SendRequest(options, HandleMessage)
                .on('error', reject)
                .end(JSON.stringify(request));
        });
    };
}
exports.RpcClient = RpcClient;
