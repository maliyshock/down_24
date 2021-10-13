import {ReactComponent as Clouds} from '../../assets/icons/clouds.svg'
import {ReactComponent as Sun} from '../../assets/icons/sun.svg'

export default function Loader() {
  const drops = new Array(9).fill('')
  return (
    <div className="loader">
      <div className="loader__icons">
        <Clouds/>
        <Sun />
        <div className="loader__rain">
          {
            drops.map(
              (item, index) => (
                <span key={`drop_${index}`} className="loader__drop"/>
              )
            )
          }
        </div>

      </div>

      <p className="loader__text">There is no bad weather...</p>
    </div>
  )
}
