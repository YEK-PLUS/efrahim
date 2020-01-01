import {POPUP} from '../types';

const {kuaforPopup} = POPUP;

const UserDefaultState = {
  kuaforPopup: false,
};

export default (state = UserDefaultState, action) => {
  switch (action.type) {
    case kuaforPopup:
      return {...state, kuaforPopup: action.value};
    default:
      return state;
  }
};
