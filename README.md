# currency-exchange
## Running the API
### Development
1). run the "npm install" to install the dependecies.

2). To start the application in development mode, run:

    i). Start the application in dev env:
            ```
            npm run start:watch
            ```
    ii). Start the application in production env:

        Install ts pm2 and typescript compiler:
        ```
        npm install -g pm2
        pm2 install typescript
        ```

        example start with scale on 2 core:
        ```
        pm2 start ./src/index.ts -i 1 \
            && sleep 1 \
            && pm2 scale index 2 --no-daemon
        ```

Express server listening on http://localhost:3009/, in development mode

## Running The Frontend

To the application please follow the following step:-
1). Run the commant 'npm install' to install all the dependency
2). After installing all the dependecy, please run 
   "ng serve" 
   after the compilation you will be able to run the project on 'http://localhost:4200';


