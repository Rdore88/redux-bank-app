import {combineReducers} from 'redux';
import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/index';
import userList from '../data/users';
import update from 'immutability-helper';

const initialState = {
    users: userList(),
    selectedUser: null,
    selectedAccount: null
}

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case USER_SELECTED:
            return update(state, {
                selectedUser: {
                    $set: action.payload
                }
            });
        case ACCOUNT_SELECTED:
              return update(state, {
                selectedAccount: {
                  $set: action.payload
                }
              });
        case WITHDRAW_FUNDS:
            return update(state, {
                selectedAccount: {
                  balance: {
                      $apply: function(balance) {
                        console.log("BALANCE", balance - action.payload);
                          return balance - action.payload
                      }
                  }
                }
            })
        default:
            return state;
    }
}

export default reducer;
