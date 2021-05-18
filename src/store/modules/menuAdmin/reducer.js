import * as actions from './actionTypes';

const initial_state = {
    itens:null,
    item_selected:{index:0}
}

export const MenuAdminReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_ITENS_MENU_ADMIN:
      return {
        ...state,
        itens: action.itens,
      };
    case actions.SELECT_ITEM_MENU_ADMIN:
      return {
        ...state,
        item_selected: action.item,
      };
    default:
      return state;
  }
}
