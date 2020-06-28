import React from 'react';

import './Footer.scss';

const linkStyles = {
    color: '#ccc',
};

function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                Copyright 2020 &nbsp; <a href="https://github.com/seryozhabaleyko/" target="_blank" style={linkStyles}>Seryozha Baleyko</a> &nbsp; |
                Sumber data berasal dari
                API &nbsp; <a href="https://disease.sh/" target="_blank" style={linkStyles}>Novel COVID API</a>
            </div>
        </footer>
    );
}

export default Footer;