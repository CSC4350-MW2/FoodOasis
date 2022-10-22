'use strict'
import 'reflect-metadata';
import { bootstrapMicroframework } from "microframework-w3tec";

import { 
    expressLoader, 
} from "@loaders/"

bootstrapMicroframework({
    loaders: [
        expressLoader,
    ]
})
    .then(() => console.log("Server Running"))
    .catch(error => console.log('Application is crashed: ' + error));