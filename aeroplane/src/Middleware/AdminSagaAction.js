import { call, put, takeEvery,take, takeLatest, delay } from "redux-saga/effects";
import $ from "jquery";
import { flightAction } from "../Store/FlightSlice";



function* workerFetchFlightInfo(action) {
  const response = yield call(() => {
    const response = fetch(
      "https://aeroplane-application-default-rtdb.firebaseio.com/add-flight-info.json"
    );
    return response;
  });
  const responseInfo = yield response.json();
  const flightList = [];
  for (let key in responseInfo) {
    flightList.push({
      flightName: responseInfo[key].flightName,
      origin: responseInfo[key].origin,
      destination: responseInfo[key].destination,
      departureDate: responseInfo[key].departureDate,
      arrivalDate: responseInfo[key].arrivalDate,
      price: responseInfo[key].price,
    });
  }
  yield put(flightAction.newFlightInfo(flightList));
}

 function* workerPostFlightInfo(action) {
  const postConfig = action.payload;
  const response = yield call(() => {
    const postStatus = fetch(postConfig.url, {
      method: postConfig.methodType,
      body: JSON.stringify(postConfig.data),
      headers: postConfig.headers,
    });
    return postStatus;
  });

  if (!response.ok) {
    throw new Error("Flight-info-store to server process is failed");
  }
  yield put({type:"FETCH_FLIGHT_INFO"})
}

function* takeFunction(action){
console.log("take function");
yield delay(1000)
//  const data=yield put({type:"FETCH_FLIGHT_INFO"})
 console.log(action);
}
function* takeFunction1(action){
console.log("take function1");
yield delay(1000)
//  const data=yield put({type:"FETCH_FLIGHT_INFO"})
 console.log(action);
}
function* takeFunction2(action){
console.log("take function2");
yield delay(1000)
//  const data=yield put({type:"FETCH_FLIGHT_INFO"})
 console.log(action);
}
function* takeFunction3(action){
console.log("take function3");
yield delay(1000)
//  const data=yield put({type:"FETCH_FLIGHT_INFO"})
 console.log(action);
}



export function* watcherFetchFlightInfo() {
  yield takeEvery("FETCH_FLIGHT_INFO", workerFetchFlightInfo);
}
export function* watcherPostFlightInfo() {
  yield takeEvery("ADD_FLIGHT_INFO", workerPostFlightInfo);
}
export function* watcherTakeEffect(){
  console.log("this is TAKE Effect");
  yield takeEvery("TAKE_EEFFECT",takeFunction);
  yield takeEvery("TAKE_EEFFECT",takeFunction1);
  yield takeEvery("TOOK_EEFFECT",takeFunction2);
  yield takeEvery("TOOK_EEFFECT",takeFunction3);
  // yield takeLatest("TAKE_EEFFECT",takeFunction);
  // yield takeLatest("TAKE_EEFFECT",takeFunction1);
  // yield takeLatest("TOOK_EEFFECT",takeFunction2);
  // yield takeLatest("TOOK_EEFFECT",takeFunction3);

 
  // const info=yield call(takeFunction,payload)
  // const info1=yield call(takeFunction1,payload)
  // const info2=yield call(takeFunction2,payload1)
  // const info3=yield call(takeFunction3,payload1)
  // const info=yield fork(takeFunction,payload)
  // const info1=yield fork(takeFunction1,payload)
  // const info2=yield fork(takeFunction2,payload1)
  // const info3=yield fork(takeFunction3,payload1)
}