import PropTypes from 'prop-types';
import {convertKelvinToCelsius, getIconBy, getTime} from "../../utils";

export default function DaySection(props) {
  const {
    time,
    temp,
    iconId,
    clickHandler,
    isActive
  } = props
  return (
      <div onClick={() => clickHandler()} className={`day-section ${isActive ? 'active' : ''}`}>
        <div className="day-section__time h4 color-indigo">{getTime(time)}</div>
        <div className="day-section__icon">{getIconBy(iconId)}</div>
        <div className="day-section__temp">{`${convertKelvinToCelsius(temp)}°`}</div>
      </div>
  )
}

DaySection.propTypes = {
  time: PropTypes.string,
  temp: PropTypes.string,
  iconId: PropTypes.number,
  clickHandler: PropTypes.func,
  isActive: PropTypes.bool,
}

DaySection.defaultProps = {
  time: '',
  temp: '',
  iconId: undefined,
  clickHandler: () => {},
  isActive: false,
}
