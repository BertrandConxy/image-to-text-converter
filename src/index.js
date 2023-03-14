import express from 'express';
import {router}  from './routes/route.js';
import path, { join } from 'path';

const __dirname = path.dirname('C:\\Users\\USER\\OneDrive\\Documents\\Reviews\\image-to-text-converter\\src\\index.js');

const app = express();
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Set the view directory
app.set('views', join(__dirname, 'views'))
// Serve static files from the 'public' folder
app.use(express.static('public'));
app.use(router)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

export default app;