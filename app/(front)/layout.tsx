"use client"
import DefaultLayout from '../layouts/DefaultLayout';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DefaultLayout children={undefined}>
      {children}
    </DefaultLayout>
  )
}
