import kafka from './kafka';

export class Server {
	private topic: string;
	readonly consumer: any;

	constructor() {
		this.topic = 'topic-register';
		this.consumer = kafka.consumer({ groupId: 'auth-group' });
	}

	async run() {
		await this.consumer.connect();
		await this.consumer.subscribe({
			fromBeginning: true,
			topic: this.topic,
		});

		await this.consumer.run({
			eachMessage: async ({ topic, partition, message }) => {
				console.log('topic:', topic);
				console.log('partition:', partition);
				console.log('message:', JSON.parse(message.value));
			},
		});
	}
}

export default new Server();
