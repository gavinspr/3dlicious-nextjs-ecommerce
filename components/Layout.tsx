import React from "react";
import { Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer, Navbar } from "../components";
import AdvertisementWindow from "./AdvertisementWindow/AdvertisementWindow";

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
        <AdvertisementWindow />
        <Center mx="2%">{children}</Center>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
