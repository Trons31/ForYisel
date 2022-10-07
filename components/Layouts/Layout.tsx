import Head from "next/head"
import { FC } from "react";
import { Navbar } from "../ui"

interface Props {
    children?: JSX.Element | JSX.Element[];
  }
  

export const Layout:FC<Props> = ({ children }) => {
  return (
    <>
    <Head>
        <title>Home</title>
        
    </Head>
  
    <Navbar />

    <main style={{
      padding: '0px 20px',
      margin: '100px 20px'
      
    }}>
        { children }
    </main>
  
  </>
  )
}
