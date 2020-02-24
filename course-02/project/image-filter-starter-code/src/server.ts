import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get('/filteredimage', async (req: Request, res: Response) => {
    const url = req.query.image_url;
    if (!url) {
      return res.status(422).send('Please insert a valid image-url')
    }
  
    let filteredImage : string;
    await filterImageFromURL(url).then( path => {
      filteredImage = path;
    });
    res.status(200).sendFile(filteredImage);
    res.on('finish', function(){
      deleteLocalFiles([filteredImage]);
    });
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();