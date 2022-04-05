import 'dotenv/config';

import kafka from './kafka';
import routes from './routes';
import bodyParser from 'body-parser';
import express from 'express';

export class Server {
	private port: string;

	readonly producer: any;
	readonly express: express.Express;

	constructor() {
		this.port = process.env.APP_PORT;

		this.express = express();
		this.producer = kafka.producer();
	}

	private middlewares() {
		this.express.use(bodyParser.json());
		this.express.use((req, res, next) => {
			req.producer = this.producer;
			next();
		});
	}

	async run() {
		this.middlewares();

		this.express.use(routes);

		await this.producer.connect();

		this.express.listen(this.port, () => {
			console.log(`app listening on port ${this.port}.`);
		});
	}
}

export default new Server();
