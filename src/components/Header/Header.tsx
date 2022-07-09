import { Auth } from "aws-amplify";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import * as S from "./Header.styles";

const Header: React.FC = () => {
  const navigate = useNavigate();
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

      <button
        style={{ color: "#fff"}}
        onClick={async () => {
          await Auth.signOut();
          navigate("/home");
        }}
      >
        Sair
      </button>
    </S.Container>
  );
};

export { Header };
