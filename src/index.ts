import 'dotenv/config';
import aedes, { Aedes } from "aedes";
import { createServer, Server } from "aedes-server-factory";
import { Logger } from "tslog";

async function bootstrap() {
    const logger: Logger = new Logger({ name: 'honey-broker' });
    const port: number = parseInt(process.env.PORT);

    logger.info('Setting up broker...');
    if(port === undefined || isNaN(port)) {
        logger.error('Invalid port provided!');
        return;
    }

    const aedesInstance: Aedes = aedes({});
    const server: Server = createServer(aedesInstance);

    server.listen(port, () => {
        logger.info('Broker listening on port', port);
    });
}

bootstrap();