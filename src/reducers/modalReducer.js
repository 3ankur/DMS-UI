import { initialState }  from './initialStates';
import {SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';
function modalReducer (state = initialState, action) {
	switch (action.type) {
	  case SHOW_MODAL:
		return {
		  ...state,
		  type: action.payload.type,
		  props: action.payload.props
		};
	  case HIDE_MODAL:
		return initialState;
	  default:
		return state;
	}
  }
  
  export default modalReducer;
  