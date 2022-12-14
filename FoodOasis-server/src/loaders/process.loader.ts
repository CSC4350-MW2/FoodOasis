import process from 'process'
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { LoggerService } from '@logger//';

export const processLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    const log = new LoggerService(__dirname)

    process.on('unhandledRejection', async(reason:any, p) => {
        log.warn(`Possibly Unhandled Rejection Reason: ${reason.message}`);    
        console.log(p)
    });
};