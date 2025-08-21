"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//17. Write a singleton Logger class that logs messages to console.
exports.Logger = void 0;

class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(message);
    }
}
exports.Logger = Logger;
