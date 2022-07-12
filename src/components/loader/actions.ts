
import { DECREMENT_LOADER, INCREMENT_LOADER } from './constants';

export function incrementLoader() {
  return {
    type: INCREMENT_LOADER,
  };
}
export function decrementLoader() {
  return {
    type: DECREMENT_LOADER,
  };
}
