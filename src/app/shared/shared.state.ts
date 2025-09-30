export interface SharedState {
  isLoading: boolean;
  errorMessage?: string;
}

export const initialState = {
  isLoading: false,
  errorMessage: '',
};
