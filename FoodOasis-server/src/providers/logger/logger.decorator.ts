import { Container } from 'typedi';

import { LoggerService as WinstonLogger } from './logger.service';

export function Logger(scope: string): ParameterDecorator {
    return (object: any, propertyKey, index): any => {
        const logger = new WinstonLogger(scope);
        const propertyName = propertyKey ? propertyKey.toString() : '';
        Container.registerHandler({ object, propertyName, index, value: () => logger });
    };
}

export { LoggerInterface } from './logger.interface';