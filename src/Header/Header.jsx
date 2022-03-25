import React from 'react';

const Header = () => {
    return(
        <div className='header-wrapper'>
            <div className='header'>
                <a href="#">Logo</a>
                <button type="submit">Sign in</button>
                <button type="submit">Sign on</button>
            </div>
        </div>
    );
}

export default Header;