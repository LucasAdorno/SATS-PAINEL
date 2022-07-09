import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./Header.styles";

const Header: React.FC = () => {
  return (
    <S.Container>
      {/* <NavLink
        to="/empresas/adicionar"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Empresas
      </NavLink>
      <NavLink
        to="/colaboradores/adicionar"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Colaboradores
      </NavLink> */}
      <NavLink
        to="/saques"
        className={({ isActive }) => (isActive ? "active-link" : "link")}
      >
        Saques
      </NavLink>
    </S.Container>
  );
};

export { Header };
