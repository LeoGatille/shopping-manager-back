import { Article } from './entity/article/article.model';
import { List } from './entity/list/list.model';
import { Test } from './models/test.model';
export const migration = () => {
    return {
        test: new Test(),
        list: new List(),
        article: new Article(),
    }
}
// List.hasMany(Article);
// 
// export default migration