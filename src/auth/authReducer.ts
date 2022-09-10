export enum ActionType {
  RESTORING_TOKEN = 'auth/restoringToken',
  TOKEN_RESTORED = 'auth/tokenRestored',
  SIGNING_IN = 'auth/signingIn',
  SIGNED_IN = 'auth/signedIn',
  SIGNING_OUT = 'auth/signingOut',
  SIGNED_OUT = 'auth/signedOut'
}

export type Action =
  | { type: ActionType.RESTORING_TOKEN }
  | { type: ActionType.TOKEN_RESTORED; token: string | null }
  | { type: ActionType.SIGNING_IN }
  | { type: ActionType.SIGNED_IN; token: string }
  | { type: ActionType.SIGNING_OUT }
  | { type: ActionType.SIGNED_OUT };

export type State = {
  isLoading: boolean;
  isSigningIn: boolean;
  isSigningOut: boolean;
  token: string | null;
};

export default function authReducer(prevState: State, action: Action): State {
  switch (action.type) {
    case ActionType.RESTORING_TOKEN:
      return {
        ...prevState,
        isLoading: true
      };
    case ActionType.TOKEN_RESTORED:
      return {
        ...prevState,
        isLoading: false,
        token: action.token
      };
    case ActionType.SIGNING_IN:
      return {
        ...prevState,
        isSigningIn: true
      };
    case ActionType.SIGNED_IN:
      return {
        ...prevState,
        isSigningIn: false,
        token: action.token
      };
    case ActionType.SIGNING_OUT:
      return {
        ...prevState,
        isSigningOut: true
      };
    case ActionType.SIGNED_OUT:
      return {
        ...prevState,
        isSigningOut: false,
        token: null
      };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
}
