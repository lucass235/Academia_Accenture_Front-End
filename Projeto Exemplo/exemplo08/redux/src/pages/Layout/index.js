import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

import Header from "../../components/Header";

const Layout = () => {
  return (
    <div>
      <Header title={"TODO List"}/>
      <S.Container>
        <Outlet />
      </S.Container>
    </div>
  );
};

export default Layout;
