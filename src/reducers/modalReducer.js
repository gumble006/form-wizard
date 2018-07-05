import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

const initialState = {
  modalProps: {},
  modalOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalOpen: true,
        modalProps: action.payload.modalProps || {},
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
