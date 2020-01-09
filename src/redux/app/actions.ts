const actions = {
  SAY_HELLO: 'SAY_HELLO',
  sayHello: () => {
    return {
      type: actions.SAY_HELLO,
      payload: 'world!',
    };
  },
};

export default actions;