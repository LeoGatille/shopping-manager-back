import { ListController } from './list.controller';
export class ListRouter {
    private listController = new ListController();
  private defaultUrl = '/lists/'
    public routes(app: any) {
        app.get(this.defaultUrl, this.listController.index);
        app.post(this.defaultUrl, this.listController.create)
    }
}