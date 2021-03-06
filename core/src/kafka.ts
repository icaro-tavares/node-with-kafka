import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'consumer',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
});

export default kafka;
