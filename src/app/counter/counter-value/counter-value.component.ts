import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css'],
})
export class CounterValueComponent implements OnInit {
  constructor(private store: Store<{ counter: counterState }>) {}
  counter$: Observable<number> | null = null;

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
