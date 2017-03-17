import * as types from '../constants/ActionTypes';

const initialState = {
    items: [],
};

export default function competitions(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_COMPETITIONS:
            return Object.assign({}, state, {
                items: [...state.items, ...action.competitions],
            });

        default:
            return state;
    }
}
