import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center w-screen pt-12 pb-5 bg-gray-100">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} All right reserved. <a className="text-purple-500" href="https://adudent.co.za">ADUDENT (PTY) LTD</a> | Designed by <a className="text-blue-800" href="https://nkululeko.io">NKULULEKO DOT IO (PTY) LTD</a></p>
    </div>
  );
}

export default Footer;
