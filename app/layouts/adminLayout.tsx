import React from 'react';
import {AppHeader, AppFooter, AppSidebar} from './admincomponents/index';
import './admincomponents/scss/style.scss'
const AdminLayout = ({
  children,
  pagedata={}
}: {
  children: React.ReactNode,
  pagedata: Object
}) => {

  return (
    <>
      <div className="admintemplate">
        <AppSidebar pagedata={pagedata} />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader pagedata={pagedata}/>
          <div className="body flex-grow-1 px-3">
            {children}
          </div>
          <AppFooter pagedata={pagedata}/>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;