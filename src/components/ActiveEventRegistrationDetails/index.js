import './index.css'

const stateStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const Initialview = () => (
  <div className="right-tot-cont">
    <p className="texter">
      Click on an event, to view its registration details
    </p>
  </div>
)

const Registered = () => (
  <div className="right-tot-cont">
    <img
      className="iconer2"
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      alt="registered"
    />
    <h1 className="texter">You have already registered for the event</h1>
  </div>
)

const YetToRegister = () => (
  <div className="right-tot-cont">
    <img
      className="iconer"
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      alt="yet to register"
    />
    <p className="texter">
      A live performance brings so much to your relationship with dance
    </p>
    <button className="buttoner" type="button">
      Register Here
    </button>
  </div>
)

const RegistrationsClosed = () => (
  <div className="right-tot-cont">
    <img
      className="iconer"
      src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      alt="registrations closed"
    />
    <h1 className="texter">Registrations Are Closed Now!</h1>
    <p className="texter2">
      Stay tuned! we will reopen the registrations soon!
    </p>
  </div>
)

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  // console.log(status)
  switch (status) {
    case stateStatus.yetToRegister:
      return <YetToRegister />
    case stateStatus.registered:
      return <Registered />
    case stateStatus.registrationsClosed:
      return <RegistrationsClosed />
    default:
      return <Initialview />
  }
}

export default ActiveEventRegistrationDetails
