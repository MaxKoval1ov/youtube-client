import { createReducer, on } from '@ngrx/store';
import { setUser } from '../../store/actions/user.actions';
import { User } from '../../store/models/user.model';

export const initialState: User = {
  name: 'name',
  imgUrl: 'assets/login.png',
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => user),
);
