import footerStyles from '../../styles/componentsCSS/Footer.module.css';

import { Link } from 'react-router-dom';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaInternetExplorer } from 'react-icons/fa';
import logo from '../../public/logo2.png';

const Footer = () => {
  return (
    <>
      <div className={footerStyles.footerbox}>
        <Link to="/">
          <div>
            <img
              className={footerStyles.logo}
              src={logo}
              alt="solar logo"
              width="150px"
              height="100px"
            />
          </div>
        </Link>
        <ul className={footerStyles.footer}>
          <li>
            <a href="https://jared-serino.netlify.app/">
              <FaInternetExplorer className={footerStyles.icon} />
              website
            </a>
          </li>
          <li>
            <a href="https://github.com/jaserino">
              <AiFillGithub className={footerStyles.icon} />
              github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jare_ser">
              <AiFillTwitterCircle className={footerStyles.icon} />
              twitter
            </a>
          </li>
          <li>
            <a href="#">
              <BiCoffeeTogo className={footerStyles.icon} />
              Buy me a coffee
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
