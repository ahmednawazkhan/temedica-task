## Description

A test task to show medicines along with diseases.

## Installation ( docker )

keeping the instruction of minimal project setup effort in mind


- copy `.env.sample` to `.env`
- run 
```bash
$ docker-compose up 
```

This will setup the project, install database, install dependencies and seed the `dataset.json` into a postgres database.

Swagger is running on `localhost:3000/api`

## Running the app locally

```bash
# development
$ npm i
$ docker-compose -f docker-compose.db.yml up -d
$ npm run migrate:dev
$ npm run prisma:seed
$ npm run start
```
visit `localhost:3000/api` for swagger

## Assumptions
- no crud operation ( except for getting all the drugs ) was created because the UI mock is not presenting any buttons to add or update or delete nor is it mentioned in the document

- since it is mentioned that the task should only consume 2-3 hours, these are the things I can add if required
  - Unit tests
  - Github action to run those tests
  - Docker compose file for production and docker migrate file for migrations. right now the docker image is not optimized, as it contains dev dependencies as well ( for ease of deployment to local machine ). It can be optimzed by multi staged build with only including production dependencies and using a node-alpin image