import * as path from 'path';
import { Service } from 'typedi';
import * as winston from 'winston';

@Service()
export class LoggerService {

    public static DEFAULT_SCOPE = 'App';

    private static parsePathToScope(filepath: string): string {
        if (filepath.indexOf(path.sep) >= 0) {
            filepath = filepath.replace(process.cwd(), '');
            filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
            filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
            filepath = filepath.replace('.ts', '');
            filepath = filepath.replace('.js', '');
            filepath = filepath.replace(path.sep, ':');
            filepath = filepath[0].toUpperCase() + filepath.slice(1).toLowerCase()
        }
        return filepath;
    }

    private scope: string;

    constructor(scope?: string) {
        this.scope = LoggerService.parsePathToScope((scope) ? scope : LoggerService.DEFAULT_SCOPE);
    }

    public debug(message: string, ...args: any[]): void {
        this.log('debug', message, args);
    }

    public info(message: string, ...args: any[]): void {
        this.log('info', message, args);
    }

    public warn(message: string, ...args: any[]): void {
        this.log('warn', message, args);
    }

    public error(message: string, ...args: any[]): void {
        this.log('error', message, args);
    }

    public http(message: string, ...args: any[]): void {
        this.log('http', message, args);
    }

    private log(level: string, message: string, args: any[]): void {
        if (winston) {
            winston.log(level ,`${this.formatScope()} ${message}`, args);
        }
    }

    private formatScope(): string {
        return `[${this.scope}]`;
    }

}