import process_img from "../utilities/img_processing";


describe('testing image processing', async ()=>{

    it('should return file path', async ()=>
    {
        const data = await process_img('encenadaport' as string, 100 as number, 200 as number);
        console.log("Here " , data);
        expect(data).toBe('E:\\Mano\\Courses\\FWD\\imageProcessingAPI\\imageProcessingAPI\\build\\assets\\thumb_img\\encenadaport.jpg');
    });
});