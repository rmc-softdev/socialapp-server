import { MikroORM } from '@mikro-orm/core';
import { Post } from './entities/Post';
import { __prod__ } from './constants';
import path from 'path'

export default {
    migrations: {
        path: path.join(__dirname,'./migrations'), 
        pattern: /^[\w-]+\d+\.[tj]s$/, 
    }  ,
    entities: [Post],
    dbName: 'aniworld',
    user: 'newboy',
    password: 'eueumesmo!',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];



