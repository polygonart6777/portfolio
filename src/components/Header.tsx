import React from "react";
import NavBar from "./NavBar";

type HeaderProps = { title: string };

export default function Header() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
