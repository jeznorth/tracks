import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import createSagaMiddleware from 'redux-saga';
import {officersSaga, operatorsSaga, permitsSaga, reportsSaga, tenuresSaga, travelPathsSaga} from "./sagas";
import logger from 'redux-logger';
import authenticationSaga from "./sagas/auth";
import travelPathUploadSaga from "./sagas/travel_path_uploads";
import persistState from 'redux-sessionstorage';

const sagaMiddleware = createSagaMiddleware();

const slicer = (paths: string[]) => {
  return (state: any) => {
    if (state.hasOwnProperty('developmentTools')) {
      return
      {
        Auth: {
          actingAs: (state.Auth !== undefined) ? state.Auth.developmentTools.actingAs : null
        }
      }
    }
    return {};
  }
}

const store = createStore(rootReducer,
  compose(applyMiddleware(sagaMiddleware, logger), persistState(null, {slicer}))
);

// run the sagas
sagaMiddleware.run(authenticationSaga);

sagaMiddleware.run(travelPathsSaga);
sagaMiddleware.run(reportsSaga);
sagaMiddleware.run(permitsSaga);
sagaMiddleware.run(tenuresSaga);
sagaMiddleware.run(operatorsSaga);
sagaMiddleware.run(officersSaga);
sagaMiddleware.run(travelPathUploadSaga);

export default store;
