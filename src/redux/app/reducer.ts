import actions from './actions';

export interface AppState {
  secret: string,
  sharesNumber: number,
  thresholdNumber: number,
  shares: string[],
}

const initialState: AppState = {
  secret: '',
  sharesNumber: 5,
  thresholdNumber: 3,
  shares: [],
};

export default function(state: AppState = initialState, action: any) {
  switch (action.type) {
    case actions.RESET_APP_STATE:
      return initialState;
    case actions.SET_SECRET:
      return { ...state, secret: action.secret };
    case actions.SET_SHARES_NUMBER:
      if(action.shares < 2) return state;
      return { ...state, sharesNumber: action.shares };
    case actions.SET_THRESHOLD_NUMBER:
      if(action.threshold > state.sharesNumber) return state;
      return { ...state, thresholdNumber: action.threshold };
    case actions.GENERATE_SHARES:
      return { ...state, shares: [] };
    case actions.SET_SHARES:
      return { ...state, shares: action.shares };
    case actions.RECOVER_SECRET:
      return { ...state, secret: action.secret };
    default:
      return state;
  }
}