import {all} from "redux-saga/effects"
import { watcherFetchFlightInfo, watcherPostFlightInfo, watcherTakeEffect } from "./AdminSagaAction";

function* RootSaga(){
    yield all([watcherFetchFlightInfo(),watcherPostFlightInfo(),watcherTakeEffect()])
}

export default RootSaga;