import express from 'express'; 

const logger = (req: express.Request , res: express.Response, next: express.NextFunction) => {
    console.log(req.url);
    next();
} 

export default logger;