import React from "react";
import "./Header.css";

type Props = {
  children: object;
};

const Header = ({ children }: Props) => (
  <header className="header">{children}</header>
);

export default Header;
