import { resolve } from 'path'
import { createConnection, getConnectionOptions } from 'typeorm';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { DBConfig } from '@config//'

export const typeormLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
    try{
        const { type, username, password, database, synchronize, host, port } = DBConfig
        const loadedConnectionOptions = await getConnectionOptions();

        const connectionOptions = Object.assign(loadedConnectionOptions, {
            type,
            host: process.env.DB_HOST || host,
            port,
            username,
            password,
            database,
            synchronize, 
            entities: [resolve(__dirname, "../modules/**/entity/*.entity.ts")],
            subscribers: [resolve(__dirname, "../modules/**/subscribers/*.subscriber.ts")], //the "__direname" is a javascript concept. 
        });

        const connection = await createConnection(connectionOptions);
        
        if (settings) {
            settings.setData('connection', connection);
            settings.onShutdown(() => connection.close());
        }

    }
    catch(e){ console.log(e) }
};