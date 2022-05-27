import express from 'express';
import images from './api/resize_img';

const routes = express.Router();

routes.get('/', (req, res): void => {
	res.send('Welcome to Image Processing API');
});

routes.use('/images', images);

export default routes;
