export interface counterState {
  counter: number;
  // isLoading: boolean;
  toggle: boolean;
}

export const initialState: counterState = {
  counter: 0,
  // isLoading: false,
  toggle: false,
};
