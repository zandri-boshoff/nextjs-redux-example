export interface UsersState {
  isLoading: boolean;
  payload: UsersStateData;
}

export interface UsersStateData {
  listOfUsers?: Users[];
}

export interface Users {
  name: string;
  username: string;
  email: string;
}
