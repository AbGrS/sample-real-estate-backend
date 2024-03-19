### Installations 

To locally install, run `npm i` and run the app with `node app.js`

### Mongo URL:
The app uses free cluster that comes with MongoDb Atlas account. To update the Mongo URL, update `URI` in `.env` (`URI=`)

### Cleaning up DD:

`node deleteSeed.js` !Caution This will nuke all the data in the DB

### Seeding The Data:

`node seed.js` This will populate some data in the schema

### Deployment:

This is deployed on Render: 
https://sample-real-estate-backend.onrender.com/api/properties

Have used the free cluster for mongodb that comes with the free account on Atlas.
