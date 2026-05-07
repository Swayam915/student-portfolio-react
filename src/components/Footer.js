import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="premium-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Student Portfolio | Built with ❤️ using React</p>
        <div className="footer-links">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Twitter</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
