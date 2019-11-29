import { TEST } from '../types';

const { _TEST } = TEST;


const UserDefaultState = {
  _TEST: 'testDefault',
};

export default (state = UserDefaultState, action) => {
  switch (action.type) {
    case _TEST:
      return { ...state, _TEST: action.value };
    default:
      return state;
  }
};
