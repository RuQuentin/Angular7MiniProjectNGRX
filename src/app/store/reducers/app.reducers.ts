import {
  // ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  // MetaReducer
} from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { usersListReducers } from './users-list.reducers'
// import { environment } from '../../../environments/environment';

// export interface State {

// }

export const appReducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
  usersList: usersListReducers
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
