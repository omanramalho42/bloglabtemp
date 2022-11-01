import React, { FC } from 'react'

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

import { Head, Main } from './styled';

const Layout:FC<LayoutProps> = ({ 
  title, 
  description, 
  children 
}: LayoutProps ) => {
  return (
    <>
      <Head>
        <title>{ title || 'LabTemp' }</title>
        <meta charSet='utf-8' content={description} />
      </Head>
      <Main>
        { children }
      </Main>
    </>
  )
}

export default Layout