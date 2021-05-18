import * as actions from './actionTypes';

export const setItensMenuAdmin = (itens) => ({
    type: actions.SET_ITENS_MENU_ADMIN,
    itens:itens
});

export const SelectItemMenuAdmin = (item) => ({
    type: actions.SELECT_ITEM_MENU_ADMIN,
    item:item
});