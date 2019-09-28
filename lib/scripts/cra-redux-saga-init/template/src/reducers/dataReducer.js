import { DATA_RECEIVED } from '../actions';

const INITIAL_STATE = {};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_RECEIVED:
      return {
        ...state,
        [action.payload.dataId]: action.payload.data,
      };

    default:
      return state;
  }
};

export default dataReducer;
