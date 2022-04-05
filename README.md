# Microservice with Node.js and Kafka

## Dependencies

- [Docker](https://docs.docker.com/install/)
- [Node.js](https://nodejs.org/en/) >= 8.0.0
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## Getting started
- Zookeeper and Kafka:
  ``` bash
  $ docker-compose up -d
  ```

- Auth:
  ``` bash
  $ cd auth
  $ cp .env.example .env
  $ yarn
  $ yarn dev

  # Output
  [nodemon] starting `sucrase-node app.ts`
  app listening on port 9324.
  ```

- Core:
  ``` bash
  $ cd core
  $ yarn
  $ yarn dev

  # Output
  [nodemon] starting `sucrase-node app.ts`
  ```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.