import { Center } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
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
        <Center w="100%" gap={4} flexDir="column" pos="absolute" top="20vh">
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
