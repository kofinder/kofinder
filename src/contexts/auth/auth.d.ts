interface IAuthContextData {

  loading: boolean;

  signed: boolean;

  user: IAuthUser;

  signIn(credentials: IAuthToken): Promise<void>;

  signOut(): void;
  
}

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IAuthState {
  token: string;
  user: User;
}

interface ISignInCredentials {
  email: string;
  password: string;
}
