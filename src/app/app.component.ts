import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './reducers';
import {Logout} from './auth/auth.actions';
import {isLoggedIn, isLoggedOut} from './auth/auth.selectors';
import {Router} from '@angular/router';
import {tap, map} from 'rxjs/operators';
import {AuthState} from './auth/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(isLoggedIn);
    this.isLoggedOut$ = this.store.select(isLoggedOut);
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
