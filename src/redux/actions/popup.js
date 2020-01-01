import {POPUP} from '../types';

const {kuaforPopup} = POPUP;
export const kuafor = (payload = true) => {
  return {
    type: kuaforPopup,
    value: payload,
  };
};
