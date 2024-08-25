"use client";

import React, { useContext } from "react";
import { AuthContext } from "./ClientProvider";
import Link from "next/link";


const Menu: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }
  const { isAuthenticated } = authContext;

  return (
    <ul>
      <li className="mb-4">
        <Link href="/list" className="text-blue-500">
          List
        </Link>
      </li>
      {isAuthenticated && (
        <li>
          <Link href="/settings" className="text-blue-500">
            Settings
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Menu;
