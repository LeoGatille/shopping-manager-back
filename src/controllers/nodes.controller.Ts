import { Request, Response } from 'express';

export class NodesController {
    public index(req: Request, res: Response) {
        res.json({ message: 'Hello World' });
    }
}