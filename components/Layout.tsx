import React from "react";
import { Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer, Navbar } from "../components";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>3Dlicious</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Center mx="2%" gap={4} flexDir="column">
          {children}
        </Center>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
