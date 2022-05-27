import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

import sizeOf  from 'image-size';

const process_img = async (name: string, width: number, height: number): Promise<string> => {
	const outputFilePath = path.join(__dirname, `../assets/thumb_img/${name}.jpg`);

	if (fs.existsSync(outputFilePath)) {
		const dimentions = sizeOf(outputFilePath);
		if(dimentions.width as number == width && dimentions.height as number == height) {
			return outputFilePath;

		}
	}
	await sharp(`./src/assets/full_image/${name}.jpg`) 
		.resize(width, height)
		.toFile(outputFilePath)
		.catch((err) => {
			console.log(err);
			throw err.message;
		});

	return outputFilePath;
};

export default process_img;
