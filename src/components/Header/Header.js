import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header() {

    const currentUser = useContext(CurrentUserContext);
    const shortName = currentUser.shortName;

    return (
        <div className="header">
            <div className="header__user-container">
                <div className="header__user-icon" />
                <p className="header__user-name">{shortName}</p>
            </div>
        </div>
    );

}

export default Header;