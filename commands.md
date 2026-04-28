# commands during development

## run vite app
for now, we are using the basic vite default ```npm run dev``` which will deploy the front end to localhost:5173.

while in fe/, execute ```npm run dev```

## run express server
express is configured to listed on port 3000 in be/index.js. turn on this server to execute api requests.

while in be/, execute ```node index.js```

## connect to postgresql via cli 
to get started with the database, you first need to install docker hub and create an account / sign in. In terminal run the following command to spin up a docker container with postgres:latest image. Run:

```docker run -d \
  --name postgres-container \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=postgres \
  -p 5434:5432 \
  -v postgres-data:/var/lib/postgresql \
  postgres:latest
  ```
  
This will sping up the container for the image and volume to store the db changes in. 

Then we will want to install postgres cli - that can be done with ```brew install postgresql```

once installed, you can connect to the db with this line:
```psql -h localhost -U postgres -p 5434 -d postgres```