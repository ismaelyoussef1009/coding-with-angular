import { createAction, props } from '@ngrx/store';

export const setIsLoading = createAction(
  ' [Shared] Set Is Loading',
  props<{ isLoading: boolean }>()
);

export const setErrorMessage = createAction(
  ' [Shared] Set error message',
  props<{ message: string }>()
);
