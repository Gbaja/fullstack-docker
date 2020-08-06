# Fullstack docker

## Description

This project uses docker to build a full stack(react, node and postgres) web application. 

The front end runs on http://localhost:8001/

The api runs on http://localhost:8000/

## How to run locally

* Must have the following on your machine:
    * Docker
    * Node
    * Docker-compose
    * Yarn

* Paste the following in a database.env file within the database folder. You can change the values to be whatever you want.

    ```
    POSTGRES_USER=fatimat
    POSTGRES_PASSWORD=password
    POSTGRES_DB=fullstack_database
    ```

Run `docker-compose up` in terminal to get services running

## Useful tips

- To connect to the database run `docker-compose run database bash` this will take you into the databse container shell. You can then use `psql --host=database --username=<<POSTGRESS_USER>> --dbname=<<POSTGRESS_DB>>`

- Remove all volumes `docker-compose down -v` useful thing to do for when you install a new package, though this deletes databse data too.