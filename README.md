# Contact Keeper
A full-stack MERN application for managing contacts using React hooks and JWT authentication. 

## Usage
Install Dependancies

```
npm install
npm clientinstall
```

## Database set up
Open your `/config/default.json` file and update youre `mongoURI` value to match the uri provided by the MongoDB database.


## Run Server
You can run these in independent terminal windows
```
npm run server  # runs Express API Only on :8080
npm run client  # runs React Client Only on :3000
```

Run the following command to run react and the server concurrently from a single terminal window
```
npm run dev     # runs concurrently Express on :8080 & React on :3000

```
