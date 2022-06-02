# Express with Typescript and MongoDB <img src='https://emojis.slackmojis.com/emojis/images/1643514187/1539/express.png?1643514187' height='25'> <img src="https://emojis.slackmojis.com/emojis/images/1479745458/1383/typescript.png?1479745458" height="25" /> <img src='https://emojis.slackmojis.com/emojis/images/1643514905/9226/mongo_db.png?1643514905' height='25'>

## Table of Content

- [About The Project](#about-the-project)
  - [Description](#description)
  - [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contact](#contact)

## About The Project

![Screenshot](./demo/preview.png)

## Description

This project is from a camera store, which I did to practice using the Express framework together with Typescript connected to MongoDB as a database.

The application performs CRUD-type queries and then returns them to the REST API endpoints. In addition, in the endpoint requests, it accepts the blob file type to save images in the database.

## Built With

[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.dev)

[![Express](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)

[![Typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)

## Installation

1. Clone the repo and change "my-project" to your project name.

```sh
  git clone https://github.com/josemiguel02/nodejs-express-ts-mongodb.git ./my-project
```

2. Go to the project directory

```sh
  cd my-project
```

3. Install NPM packages

```sh
  yarn install
```

4. Add the following environment variables to your .env file

`DB_URI`

`DB_USER`

`DB_PASSWORD`

## Usage

Run the project in development

```
  yarn dev
```

Build the project

```
  yarn build
```

## API Reference

### Get all cameras

```
  GET /api/cameras
```

### Create a camera

```
  POST /api/cameras/add
```

### Edit a camera

```
  PUT /api/cameras/edit/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. ID of camera |

### Delete a camera

```
  DELETE /api/cameras/delete/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. ID of camera |

## Contact

- Gmail - [josemidev24@gmail.com](mailto:josemidev24@gmail.com)
- Instagram - [@jmdp.02](https://www.instagram.com/jmdp.02)
