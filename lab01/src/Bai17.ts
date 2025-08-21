//17. Write a singleton Logger class that logs messages to console.
export class Logger {
    static instance: Logger;

    constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(message);
    }
}
