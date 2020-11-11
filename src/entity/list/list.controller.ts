import { Article } from './../article/article.model';
import { ListType } from './list.model';
import { List } from './list.model';
import { Request, Response } from "express";
import { all } from 'bluebird';

export class ListController {
    index(req: Request, res: Response) {
        List.findAll<List>({})
            .then((lists: List[]) => {
                // console.log('getArtcicles => ', lists[0].getArticles());

                lists[0].getArticles().then(articles => res.json({ list: lists[0], articles }))
                // lists[0].getArticles()
                // lists = lists.map(list => {
                //     return list.get();
                // });
                // Article.findAll({ where: { ListId: 1 } }).then((a) => res.json(a))
                // console.log('wtf list => ', lists);
                // this.toto();
                // this.getRelatedArticles(lists)
                //     .then(fullLists => {
                //         // const toto = Article.findAll({ where: })
                //         res.json(fullLists);
                //     })
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
    toto() {
        console.log('TOTO');

    }
    getRelatedArticles = (lists: List[]): Promise<FullList[]> => {
        console.log('LIST => ', lists);
        return new Promise((resolve, reject) => {
            const allFullListPromise: Promise<FullList>[] = []

            lists.forEach(list => {
                allFullListPromise.push(this.fullListPromise(list));
            });
            return Promise.all(allFullListPromise)
                .then(allFullList => {
                    console.info('allFullList => ', allFullList)
                    resolve(allFullList);
                });
        })
    }
    fullListPromise = (list: List): Promise<FullList> => {
        return new Promise((resolve, reject) => {
            Article.findAll<Article>({ where: { ListId: list.id } })
                .then(articles => {
                    console.log('ARTICLES => ', articles);
                    resolve({ list, articles, });
                })
                .catch(err => {
                    console.error('ERR FullListPromise => ', err);
                });
        })
    }
}


export type FullList = {
    list: List;
    articles: Article[];
}