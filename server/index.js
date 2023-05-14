import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './database/connect.js'; 
import postRoutes from './routes/postRoutes.js';
import openaiRoutes from './routes/openaiRoutes.js';

dotenv.config();

const app = express();

app.use(cors()); // This enables Cross-Origin Resource Sharing (CORS) for the server. This allows clients from different domains to access the server's resources.
app.use(express.json({limit: '50mb'})); // This middleware parses incoming requests with JSON payloads and limits the size of the payload to 50 megabytes.
app.use('/api/v1/post',postRoutes); //This sets up a route for the server to handle incoming requests to /api/v1/post using postRoutes. postRoutes is presumably an Express router object that contains the logic for handling these requests.
app.use('/api/v1/openai',openaiRoutes);

app.get('/', async (req, res) => {
    res.send('Helloo');
})

const startServer = async() => {
    try{
        connectDB(process.env.MONGODB_URL);
    }catch(error){
        console.error("Error connecting to MongoDb");
    }

    app.listen(8080,() => {console.log('Server has started on port http://localhost:8080');});
}

startServer(); 