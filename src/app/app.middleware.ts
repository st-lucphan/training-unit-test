import { all } from 'redux-saga/effects';

import { watchAuth } from '@app/core/auth/auth.middleware';
import { watchGetUser } from './pages/users/user.middleware';

export default function* appMiddleware() {
  yield all([watchAuth(), watchGetUser()]);
}
