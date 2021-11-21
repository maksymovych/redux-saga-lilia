export const userActions = {
  LOG_IN: '[User] Log in',
};

export const logIn = (user) => ({
  type: userActions.LOG_IN,
  payload: { user },
});
