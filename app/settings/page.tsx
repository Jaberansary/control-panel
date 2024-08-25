"use client";

import React, { useContext } from "react";
import { AuthContext } from "../components/ClientProvider";
import Menu from "../components/Menu";

const SettingsPage: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext?.isAuthenticated) {
    return <div>Access denied.</div>;
  }

  return (
    <main className="flex">
      <Menu />
      <div className="flex-1 p-4">
        <h2>Settings</h2>
        <p>Settings content goes here...</p>
      </div>
    </main>
  );
};
export default SettingsPage;
