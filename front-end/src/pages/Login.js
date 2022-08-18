import React from "react";
import Header from "../components/header/Header";
import IdentificationForm from "../components/IdentificationForm/IdentificationForm";
import "./login.scss"

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