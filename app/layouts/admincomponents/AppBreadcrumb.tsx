import React from 'react'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = ({
  pagedata
}: {
  pagedata: Object
}) => {
  // const currentLocation = useLocation().pathname

  // const getRouteName = (pathname, routes) => {
  //   const currentRoute = routes.find((route) => route.path === pathname)
  //   return currentRoute ? currentRoute.name : false
  // }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    /* location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    }) */
    return breadcrumbs
  }
  let breadcrumbs = [];
  if(pagedata?.breadcrumbs){
    breadcrumbs = pagedata?.breadcrumbs
  }

  return (
    <>
      <CBreadcrumb className="m-0 ms-2">
        {/* <CBreadcrumbItem href="/">Home</CBreadcrumbItem> */}
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <CBreadcrumbItem
              {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
              key={index}
            >
              {breadcrumb.name}
            </CBreadcrumbItem>
          )
        })}
      </CBreadcrumb>
    </>
  )
}

export default React.memo(AppBreadcrumb)
