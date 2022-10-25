'use strict'
import 'reflect-metadata';
import { bootstrapMicroframework } from "microframework-w3tec";

import { banner } from '@providers/banner';
import { LoggerService } from '@logger//';
import { 
    expressLoader, 
    winstonLoader,
    processLoader,
    swaggerLoader,
    iocLoader
} from "@loaders//"

const log = new LoggerService(__filename);

// loading all servers
bootstrapMicroframework({
    loaders: [
        winstonLoader,
        processLoader,
        iocLoader,
        expressLoader,
        swaggerLoader
    ]
})
    .then(() => banner(log))
    .catch(error => log.error('Application is crashed: ' + error));