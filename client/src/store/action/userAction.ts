// eslint-disable-next-line import/named
import { Dispatch } from "redux";

export const getWeather =
  (lat: number, lon: number) => async (dispatch: Dispatch<WeatherAction>) => {
    console.log("start");
    dispatch({ type: WeatherActionTypes.SET_LOADING, payload: true });
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=539addb3e517333cc534fa82c01a0ce6`
    )
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: WeatherActionTypes.SET_CITY, payload: data });
        dispatch({ type: WeatherActionTypes.SET_LOADING, payload: false });
      })
      .catch((request) => {
        console.log(request);
        dispatch({ type: WeatherActionTypes.SET_ERROR, payload: request });
        dispatch({ type: WeatherActionTypes.SET_LOADING, payload: false });
      });
    console.log("end");
  };
