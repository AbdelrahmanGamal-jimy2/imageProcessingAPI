import process_img from '../utilities/img_processing';
import path from 'path';


describe('testing image processing', async () => {
	it('should return file path', async () => {
		const data = await process_img('encenadaport' as string, 100 as number, 200 as number) as string;
		expect(data).toBe(path.join(__dirname, `../assets/thumb_img/encenadaport.jpg`));
	});
});
