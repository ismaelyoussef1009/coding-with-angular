import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterState } from './counter.state';
import { COUNTER_STATE_NAME } from 'src/app/constants';

const getCounterState = createFeatureSelector<counterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getToggle = createSelector(getCounterState, (state) => {
  return state.toggle;
});
