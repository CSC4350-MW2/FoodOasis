'use strict'
import 'reflect-metadata';
import { bootstrapMicroframework } from "microframework-w3tec";

import { banner } from '@providers/banner';
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
    .then(() => banner(log))
    .catch(error => log.error('Application is crashed: ' + error));