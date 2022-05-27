import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe('testing endpoint responses', () => {
    it('testing api endpoint', (done: DoneFn) => {
        (async () => {
            const response = await request.get('/api');
            expect(response.status).toBe(200);
            done();
        })()
    });
});
