'use strict'
import 'reflect-metadata';
import { bootstrapMicroframework } from "microframework-w3tec";

import { LoggerService } from '@logger/';
import { 
    expressLoader, 
    winstonLoader
} from "@loaders/"

const log = new LoggerService(__filename);

bootstrapMicroframework({
    loaders: [
        winstonLoader,
        expressLoader,
    ]
})
    .then(() => log.http("Server Running"))
    .catch(error => log.error('Application is crashed: ' + error));