import { ListController } from './list.controller';
export class ListRouter {
    private listController = new ListController();

    public route(app: any) {
        app.get('/', this.listController.index);
        app.post('/', this.listController.create)
    }
}