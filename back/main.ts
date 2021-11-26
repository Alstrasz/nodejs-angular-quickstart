import * as server from './server';

const s = new server.express_app( { ip: '127.0.0.1', port: 3030 } );
s.init().listen();
