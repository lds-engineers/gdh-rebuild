
import React from 'react';
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <header>Front Store header</header>
      <main>{children}</main>
      <footer>Front Store  footer</footer>
    </div>
  );
};

export default DefaultLayout;