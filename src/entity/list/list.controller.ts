import { ListType } from './list.model';
import { List } from './list.model';
import { Request, Response } from "express";

export class ListController {
    index(req: Request, res: Response) {
        List.findAll<List>({})
            .then((lists: List[]) => {
                res.json(lists);
            })
            .catch((err: Error) => {
                res.status(500).json(err);
            });
    }

    create(req: Request, res: Response) {
        const params: ListType = req.body;
        List.create<List>(params)
            .then((list) => {
                res.status(201).json(list);
            })
            .catch((err: Error) => {
                console.log('POST ERR => ', err)
                res.status(500).json(err);
            });
    }
}