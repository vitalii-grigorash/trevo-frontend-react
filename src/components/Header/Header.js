import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const shortName = currentUser.shortName

    const {
        crumbsArray,
    } = props;

    return (
        <div className="header">
            <div className="header__crumbs-container">
                {crumbsArray.map((text, index) => (
                    <div key={index} className="header__crumb-container">
                        <p className="header__crumb-text">{text}</p>
                        <div className="header__crumb-arrow" />
                    </div>
                ))}
            </div>
            <div className="header__user-container">
                <div className="header__user-icon" />
                <p className="header__user-name">{shortName}</p>
            </div>
        </div>
    );

}

export default Header;