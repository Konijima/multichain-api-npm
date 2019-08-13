"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * JSON-RPC 2.0 predefined error codes.
 */
var ErrorCode;
(function (ErrorCode) {
    /**
     * The request body is an invalid JSON-RPC request.
     */
    ErrorCode[ErrorCode["InvalidRequest"] = -32600] = "InvalidRequest";
    /**
     * The invoked method does not exist.
     */
    ErrorCode[ErrorCode["MethodNotFound"] = -32601] = "MethodNotFound";
    /**
     * The method arguments are invalid.
     */
    ErrorCode[ErrorCode["InvalidParams"] = -32602] = "InvalidParams";
    /**
     * Internal JSON-RPC error.
     */
    ErrorCode[ErrorCode["InternalError"] = -32603] = "InternalError";
    /**
     * The request body is an invalid JSON document.
     */
    ErrorCode[ErrorCode["ParseError"] = -32700] = "ParseError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
