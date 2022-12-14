import cors from 'cors'
import helmet from 'helmet'
import { resolve } from 'path'
import * as bodyParser from 'body-parser'
import express, { Application } from 'express'
import { useExpressServer } from 'routing-controllers'
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { AppConfig } from '@config//'
import { authorizationChecker } from '@server/authorization/authorizationChecker'
import { currentUserChecker } from '@server/authorization/currentUserChecker'

export const expressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const connection = settings.getData('connection');
        const app = express();

        // Setting middlewares
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(helmet())

        // Controllers Setup
        const Controllers = resolve(__dirname, "../modules/**/controller/*.controller.ts");
        const Middlewares = resolve(__dirname, "../common/middlewares/*.middleware.ts");
        useExpressServer<Application>(app, { 
            controllers: [ Controllers ], 
            middlewares: [ Middlewares ],
            classTransformer: true, 
            defaultErrorHandler: false,
            validation: {
                whitelist: true, 
                forbidNonWhitelisted: true,
                forbidUnknownValues: true
            },
            authorizationChecker: authorizationChecker(connection),
            currentUserChecker: currentUserChecker(connection)
        });

        const expressApp: Application = app

        // Run application to listen on given port
        if (AppConfig.env !== 'test') {
            const server = expressApp.listen(AppConfig.port)
            settings.setData('express_server', server);
        }

        // Here we can set the data for other loaders
        settings.setData('express_app', expressApp);
    }
};