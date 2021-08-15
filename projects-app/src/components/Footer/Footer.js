import React from 'react';
import githubLogo from '../../imgs/githubLogo.png';

function Footer() {
    return (
        <footer>
            <menu class="relevant-links">
                <a href="#">About</a>
                <a href="#">Projects</a>
            </menu>
            <div class="footer-links">
                <p>© 2021 Joel Ramos. All Rights reserved.</p>
                <menu>
                    <img src={githubLogo} alt="Link to my github logo" />
                </menu>
            </div>
        </footer>
    )
}

export default Footer;