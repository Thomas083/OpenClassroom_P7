import React from "react";
import Header from "../components/header/Header";
import IdentificationForm from "../components/identification-form/IdentificationForm";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <IdentificationForm />
      </main>
    </>
  );
};

export default Login;