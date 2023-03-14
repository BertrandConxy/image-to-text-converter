import express from 'express';
import {routes}  from './routes/route.js';
import { join } from 'path';

const app = express();
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Set the view directory
app.set('views', join(__dirname, '/views'))
// Serve static files from the 'public' folder
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

export default app;