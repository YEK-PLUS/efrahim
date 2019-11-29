import { TEST } from '../types';

const { _TEST } = TEST;
const test = (payload = true) => {
  return {
    type: _TEST,
    value: payload,
  };
};
