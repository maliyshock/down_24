import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import {fetchWeather} from "../actions/weather";
import {withErrorBoundary} from "react-error-boundary";
import {connect} from "react-redux";
import ErrorBoundary from "../error-boundary";
import DaySection from "./dummy/DaySection";
import {convertKelvinToCelsius, getIconBy} from "../utils";
import moment from "moment";
import Loader from "./dummy/Loader";

function WeatherWidget(props) {
  const {dispatch, weather} = props;
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const currentDay = weather.data?.list[currentDayIndex];
  const maxTemp = convertKelvinToCelsius(currentDay?.main.temp_max);
  const minTemp = convertKelvinToCelsius(currentDay?.main.temp_min);
  const sky = currentDay?.weather[0].main;
  const temp = convertKelvinToCelsius(currentDay?.main.temp);
  const city = weather?.data?.city?.name;
  const time = currentDay?.dt_txt.split(' ')[0];
  const WeatherIcon = getIconBy(currentDay?.weather[0]?.id)

  useEffect(() => {
    dispatch(fetchWeather())
  }, []);

  return (
      <div className="weather-widget">
        {
          weather.isFetching
            ? (
              <Loader/>
            )
            : (
              <>
                <header className="weather-widget__header">
                  <div className="weather-widget__column weather-widget__header-icon">
                    {WeatherIcon}
                  </div>

                  <div className="weather-widget__column weather-widget__temperature-block">
                    <div className="row row--space-between weather-widget__sub-title">
                      <p className="h4 color-indigo">{sky}</p>
                      <p className="h4 color-indigo">{maxTemp}° / {minTemp}°</p>
                    </div>
                    <div className="h1">{temp}°</div>
                  </div>

                  <div className="weather-widget__column weather-widget__date">
                    <p className="h4 color-indigo weather-widget__sub-title">{city}</p>
                    <h2 className="h2">
                      <time dateTime={moment(time).format('YYYY.MM.DD')}>
                        {moment(time).format('dddd DD. MMMM')}
                      </time>
                    </h2>
                  </div>
                </header>
                <footer className="weather-widget__footer">
                  <ul className="gallery">
                    {(weather.data?.list || []).map((item, index) => (
                      <li key={`gallery_item${index}`} className="gallery__item">
                        <DaySection
                          isActive={currentDayIndex === index}
                          clickHandler={() => setCurrentDayIndex(index)}
                          time={item.dt_txt}
                          temp={item.main?.temp}
                          iconId={item.weather[0].id}
                        />
                      </li>
                    ))}
                  </ul>
                </footer>
              </>
            )
        }
      </div>
  )
}

WeatherWidget.propTypes = {
  dispatch: PropTypes.func,
  weather: PropTypes.shape(),
}

WeatherWidget.defaultProps = {
  dispatch: () => {},
  weather: {},
}

export default withErrorBoundary(
  connect((state) => {
    const {
      weather
    } = state;

    return {
      weather,
    }
  })(WeatherWidget), {FallbackComponent: ErrorBoundary}
)

