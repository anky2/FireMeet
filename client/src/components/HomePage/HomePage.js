import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVideo,faKeyboard} from "@fortawesome/free-solid-svg-icons";
import Header from './../UI/Header/Header'
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Want to call a friend? Try Firemeet</h2>
                        <p>It's a google meet clone with almost all the features available
                            as the original one. Try now!
                        </p>
                        <div className="action-btn">
                            <button className="btn green">
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                New Meeting
                            </button>
                            <div className="input-block">
                            <div className="input-section">
                                <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                <input placeholder='Enter a code or link' />
                            </div>
                            <button className="btn no-bg">Join</button>
                        </div>
                        </div>
                        
                    </div>
                    <div className="help-text">
                        <a href=''>Learn more </a> about fire meet
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src='https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg'></img>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HomePage;