import React from "react";
import Header from '/src/components/header';
import Footer from '/src/components/footer';
import Error from '/src/components/error';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Error />
      <Footer />
    </>
  );
};

export default ErrorPage;
