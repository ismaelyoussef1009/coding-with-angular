import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHARED_STATE } from '../constants';
import { SharedState } from './shared.state';

export const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE);

export const getIsLoading = createSelector(getSharedState, (state) => {
  return state.isLoading;
});

export const getErrorMassage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});
