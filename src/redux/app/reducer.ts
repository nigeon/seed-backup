import actions from './actions';

export interface AppState {
  hello: string,
}

const initialState: AppState = {
  hello: '',
};

export default function(state: AppState = initialState, action: any) {
  switch (action.type) {
    case actions.SAY_HELLO:
      return { ...state, hello: action.payload};
    default:
      return state;
  }
}