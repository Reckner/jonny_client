import React from 'react';
import './QuickLinks.scss';
import friendsLogo from './Pictures/friends.png';
import addnewLogo from './Pictures/addnew.png';
import settingsLogo from './Pictures/settings.png';
import unmutedLogo from './Pictures/unmuted.png';
import profileLogo from './Pictures/profile.png';

const QuickLinks: React.FC = () => {
    return (
        <>
            <div>
                <div className="bg-dark"></div>
            </div>
            <div className="quicklinks">
                <div className="links">
                    <div className="box">
                        <img className="defaultLogo" src={friendsLogo} />
                    </div>
                    <div className="box">
                        <img className="defaultLogo" src={addnewLogo} />
                    </div>
                    <div className="box">
                        <img className="defaultLogo" src={settingsLogo} />
                    </div>
                    <div className="box">
                        <img className="defaultLogo" src={unmutedLogo} />
                    </div>
                </div>
                <div>
                    <div className="boxProfile">
                        <img className="profileLogo" src={profileLogo} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuickLinks;
