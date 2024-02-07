"use client"
import AdminLayout from '../layouts/adminLayout';

export default function RootLayout({
  children,
  pagedata={},
}: {
  children: React.ReactNode,
  pagedata: Object
}) {
  return (
    <AdminLayout children={children} pagedata={pagedata}/>
  )
} 
