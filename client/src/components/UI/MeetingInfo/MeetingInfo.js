import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faTimes,
    faUser,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons'

import './MeetingInfo.scss'

const MeetingInfo = () => {
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h3>Your meeting is ready</h3>
                <FontAwesomeIcon className="icon" icon={faTimes} />
            </div>
            <button className="add-people-btn">
                <FontAwesomeIcon className="icon" icon={faUser} />
                Add others
            </button>
            <p className="info-text">
                Share this meeting link with others
            </p>
            <div className="meet-link">
                <span>Some random url</span>
                <FontAwesomeIcon className="icon" icon={faCopy} />
            </div>
            <div className="permission-text">
                <FontAwesomeIcon className="icon" icon={faShieldAlt} />
                <p className="small-text">People who use this meeting lunk must get your permission before they can join</p>
            </div>
            <p className="small-text">
                Joined as random
            </p>
        </div>
    )
}

export default MeetingInfo;