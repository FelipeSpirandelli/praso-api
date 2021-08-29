# Express API

## Start development

```
yarn stardev
```

## Database ( Postgresql)
### Creating local database
Install postgresql and pgAdmin4 and configure it. Then

- Open postgres:
    - On Windows:
      ```
      psql -U postgres
      ```
	- On Linux:
      ```
      sudo -u postgres psql
      ```
- Create a user:
  ```
  CREATE USER username_you_choose WITH PASSWORD 'pass';
  ```
- Criar o DB:
  ```
  CREATE DATABASE database_name_you_choose WITH OWNER username_you_choose;
  ```

### Config 
In .env, there must have a CONNECTION_STRING to the local Postgresql database you create. It should be:
```
"postgresql://username:password@localhost:5432/database"
```

## Understanding the repo

### Controllers

These are the function where yo should write the functions that occurs in each route. For every route,
there must be one controller file. Besides, all http methods of one route should be in one controller
file

### models
In model there is a standard class that create the function select and insert. However, if you want to add
more methods, you can, but you have to know SQL.

### routes
Where all routes are located. You have to import the functions from controllers. 

[![Build Status](https://app.travis-ci.com/FelipeSpirandelli/praso-api.svg?branch=main)](https://app.travis-ci.com/FelipeSpirandelli/praso-api)

[![Coverage Status](https://coveralls.io/repos/github/FelipeSpirandelli/praso-api/badge.svg?branch=main)](https://coveralls.io/github/FelipeSpirandelli/praso-api?branch=main)

[![Maintainability](https://api.codeclimate.com/v1/badges/cdde9bb9486408294faf/maintainability)](https://codeclimate.com/github/FelipeSpirandelli/praso-api/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/cdde9bb9486408294faf/test_coverage)](https://codeclimate.com/github/FelipeSpirandelli/praso-api/test_coverage)