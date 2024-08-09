import './index.css'

const EventItem = props => {
  const {Details, isActive, changeStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = Details

  const changer = () => {
    changeStatus(id, registrationStatus)
  }

  const classer = isActive ? 'success-imager' : 'imger'

  return (
    <li className="li-itm">
      <button className="btner" type="button" onClick={changer}>
        <img className={classer} src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
