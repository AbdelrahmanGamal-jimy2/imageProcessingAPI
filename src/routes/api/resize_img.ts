import express from 'express';
import process_img from '../../utilities/img_processing';
import logger from '../../utilities/logger';

const images = express.Router();

images.get('/', logger, async (req, res) : Promise<void> => {
	try {
		const filePath = await process_img(
			req.query.name as string,
			+(req.query.width as string),
			+(req.query.height as string)
		);
		res.status(200);
		res.sendFile(filePath);
	} catch (err) {
		console.log(err);
		res.status(400);
		res.send('Incorrect file path');
	}
});

export default images;
