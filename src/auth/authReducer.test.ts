import authReducer, { ActionType, State } from './authReducer';

const initialState: State = {
  isLoading: false,
  isSigningIn: false,
  isSigningOut: false,
  token: null
};

test('sets loading flag when restoring token', () => {
  const state = authReducer(initialState, {
    type: ActionType.RESTORING_TOKEN
  });

  expect(state).toEqual({
    ...initialState,
    isLoading: true
  });
});

test("sets token after it's restored", () => {
  const action = {
    type: ActionType.TOKEN_RESTORED,
    token: 'secret'
  };

  const state = authReducer(initialState, action);

  expect(state).toEqual({
    ...initialState,
    isLoading: false,
    token: action.token
  });
});

test('sets login flag when signing in', () => {
  const state = authReducer(initialState, { type: ActionType.SIGNING_IN });

  expect(state).toEqual({
    ...initialState,
    isSigningIn: true
  });
});

test('sets token and unsets login flag when signed in', () => {
  const action = {
    type: ActionType.SIGNED_IN,
    token: 'secret'
  };

  const state = authReducer(initialState, action);

  expect(state).toEqual({
    ...initialState,
    isSigningIn: false,
    token: action.token
  });
});

test('sets logout flag when signing out', () => {
  const state = authReducer(initialState, { type: ActionType.SIGNING_OUT });

  expect(state).toEqual({
    ...initialState,
    isSigningOut: true
  });
});

test('unsets token and logout flag when signed out', () => {
  const state = authReducer(initialState, { type: ActionType.SIGNED_OUT });

  expect(state).toEqual({
    ...initialState,
    isSigningOut: false,
    token: null
  });
});
