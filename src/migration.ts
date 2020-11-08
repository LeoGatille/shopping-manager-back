import { List } from './entity/list/list.model';
import { Test } from './models/test.model';
export const migration = () => {
    return {
        test: new Test(),
        list: new List(),
    }
}
// export default migration