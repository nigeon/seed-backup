const actions = {
  RESET_APP_STATE: 'RESET_APP_STATE',
  resetAppState: () => ({ type: actions.RESET_APP_STATE }),

  SET_SECRET: 'SET_SECRET',
  setSecret: (secret: string) => {
    return {
      type: actions.SET_SECRET,
      secret,
    };
  },

  SET_SHARES_NUMBER: 'SET_SHARES_NUMBER',
  setSharesNumber: (shares: number) => {
    return {
      type: actions.SET_SHARES_NUMBER,
      shares,
    };
  },

  SET_THRESHOLD_NUMBER: 'SET_THRESHOLD_NUMBER',
  setThresholdNumber: (threshold: number) => {
    return {
      type: actions.SET_THRESHOLD_NUMBER,
      threshold,
    };
  },
  
  GENERATE_SHARES: 'GENERATE_SHARES',
  generateShares: () => {
    return {
      type: actions.GENERATE_SHARES,
    };
  },

  SET_SHARES: 'SET_SHARES',
  setShares: (shares: string[]) => {
    return {
      type: actions.SET_SHARES,
      shares,
    }
  },

  RECOVER_SECRET: 'RECOVER_SECRET',
  recoverSecret: () => ({ type: actions.RECOVER_SECRET }),
};

export default actions;