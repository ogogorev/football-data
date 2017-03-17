import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

// const createStoreWithMiddleware = () applyMiddleware(thunkMiddleware, )(createStore);

// export default function configureStore() {
//     return createStoreWithMiddleware(rootReducer);
// }

export default function configureStore(routerMiddleware) {
    return createStore(
        rootReducer,
        applyMiddleware(routerMiddleware, thunkMiddleware),
    );
}
