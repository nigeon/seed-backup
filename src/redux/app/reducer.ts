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
    case actions.SET_SECRET:
      return { ...state, secret: action.secret };
    case actions.SET_SHARES_NUMBER:
      return { ...state, sharesNumber: action.shares };
    case actions.SET_THRESHOLD_NUMBER:
      return { ...state, thresholdNumber: action.threshold };
    case actions.GENERATE_SHARES:
      return { ...state, shares: [] };
    case actions.SET_SHARES:
      return { ...state, shares: action.payload.shares };
    case actions.RECOVER_SECRET:
      return { ...state, secret: '' };
    default:
      return state;
  }
}