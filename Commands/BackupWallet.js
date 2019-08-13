"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Safely copies wallet.dat to destination, which can be a directory or a path
 * with filename.
 * @param filename The destination directory or file.
 * @returns A JSON-RPC request for the *backupwallet* command.
 */
function BackupWallet(filename) {
    return { method: 'backupwallet', params: [filename] };
}
exports.BackupWallet = BackupWallet;
