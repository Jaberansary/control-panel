import React from "react";
import Link from "next/link";

type MenuProps = {
  canAccessSettings: boolean;
};

const Menu: React.FC<MenuProps> = ({ canAccessSettings }) => {
  return (
    <ul>
      <li className="mb-4">
        <Link href="/list" className="text-blue-500">
          List
        </Link>
      </li>
      {canAccessSettings && (
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
