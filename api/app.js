import express from 'express';

import postRoute  from './routes/post.route.js';
import authRoute from './routes/auth.route.js';

const app = express();

app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);
app.listen(8080, () => {
    console.log('Server is running on port 8080');
    });