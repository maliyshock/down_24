import {ReactComponent as WeatherSun} from './assets/icons/weather-sun.svg'
import {ReactComponent as WeatherCloud} from './assets/icons/weather-cloud.svg'
import {ReactComponent as WeatherRain} from './assets/icons/weather-rain.svg'
import {ReactComponent as NoImg} from './assets/icons/no-img.svg'

export function removeFromArray(array, index) {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
}

export function convertKelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

export function getTime(string) {
  const array = string.split(' ');
  const time = array[1].split(':');
  return `${time[0]}:${time[1]}`
}

export function getIconBy(number) {
  switch (number) {
    case 800: {
      return <WeatherSun className="icon icon--color-accent"/>
    }
    case 803: {
      return <WeatherCloud className="icon"/>
    }
    case 500: case 501: {
      return <WeatherRain className="icon"/>
    }
    default: return <NoImg  className="icon"/>
  }
}

export function fetchUrl(obj) {
  const {
    url,
    method,
    body,
    debug
  } = obj

  let headers = {
    Accept: 'application/json',
  };
  if(method === 'POST') {
    headers = new Headers({
      ...headers,
      'Content-Type': 'application/json',
    });
  }

  const request = new Request(url, {
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
    ...(headers ? {headers} : {}),
  });

  if(debug) {
    console.log('headers', headers)
  }

  return fetch(request)
    .then((response) => {
      if(debug){
        console.log('response', response)
      }
      if (response.ok && response.status >= 200 && response.status <= 299) {
        const result = response.json();
        if(debug) {
          console.log('result', result)
        }
        return result
      } else {
        return response.json().then((result) => {
          throw Error(result.err)
        })
      }
    })
}