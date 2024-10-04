import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">This website was made with:</p>
        <div className="icon-container">
          <Icon icon="logos:react" width="40" title="React" className="footer-icon" />
          <Icon icon="logos:vitejs" width="40" title="Vite" className="footer-icon" />
          <Icon icon="logos:netlify" width="75" title="Netlify" className="footer-icon" />
          <Icon icon="logos:axios" width="75" title="Axios" className="footer-icon" />
        </div>
        <p className="copyright-text">&copy; {new Date().getFullYear()} Charley Crowson. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
