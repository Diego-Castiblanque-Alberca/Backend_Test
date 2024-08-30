<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Backend Test Project

This project is a backend developed with Nest.js, a Node.js framework that helps build scalable and efficient server-side applications.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (recommended version: 16.x or higher)

## Installation

### 1. Install Nest.js

Follow the instructions in the [official Nest.js documentation](https://docs.nestjs.com/first-steps) to install the Nest.js CLI globally:

```bash
npm i -g @nestjs/cli
```
### 2. Download the Project

Download the project from the repository using the following link:

[Download the project (ZIP)](https://github.com/Diego-Castiblanque-Alberca/Backend_Test/archive/refs/heads/master.zip)

### 3. Extract the Project

Extract the downloaded file to a folder of your choice.

### 4. Install Dependencies

Open a terminal in the root directory of the project and run the following command to install all the necessary dependencies:

```bash
npm install
```
### 5. Run the Project

To start the server in development mode, run the following command:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
The server will be available at http://localhost:3000 by default.

### 6. Run tests

```bash
# e2e tests
$ npm run test:e2e
```
### 7. Usage

You can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to make HTTP requests to the server and test the different routes and functionalities of the backend.

## API Endpoints

Below are the available API endpoints:

### Find Pokémon by Name or ID

- **Endpoint:** `(POST) /pokemon/findByNameOrId/{nameOrId}/`
- **Description:** Allows searching for a Pokémon by its name or ID.
- **Examples:**
  - By name:
    ```http
    POST http://localhost:3000/pokemon/findByNameOrId/pikachu/
    ```
  - By ID (Example for Pikachu, ID: 25):
    ```http
    POST http://localhost:3000/pokemon/findByNameOrId/25/
    ```

### Get Pokémon CSV File by Color

- **Endpoint:** `(GET) /pokemon/csv/{color}`
- **Description:** Returns a CSV file with Pokémon filtered by color.
- **Example:**
  ```http
  GET http://localhost:3000/pokemon/csv/black
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
