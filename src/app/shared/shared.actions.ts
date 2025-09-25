import { createAction, props } from '@ngrx/store';

export const setIsLoading = createAction(
  ' [Shared] Set Is Loading',
  props<{ isLoading: boolean }>()
);
