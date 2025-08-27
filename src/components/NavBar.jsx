import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import { useTheme } from "../context/themeContext";
import { Toggle } from "./Toggle";
import { useEffect, useState } from "react";

export function NavBar() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  const tokenAdmin = localStorage.getItem("tokenUser");

  useEffect(() => {
    setTheme(isEnabled ? "dark" : "light");
  }, [isEnabled]);

  console.log(tokenAdmin);

  return (
    <div className="flex justify-between items-center w-full py-2">
      <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
        Logo
      </span>
      <div className="flex items-center gap-2">
        <div className="flex pr-12 gap-8 items-center">
          {!tokenAdmin && (
            <>
              <Link
                to="ingresar"
                className={`cursor-pointer w-10 rounded-full p-2 ${theme === "dark" ? "hover:backdrop-brightness-200" : "hover:backdrop-brightness-95"}`}
              >
                <img src={theme === "dark" ? "./user-white.svg" : "./user-black.svg"} alt="user-icon" />
              </Link>
              <Cart />
            </>
          )}
          {location.pathname == "/intranet/panel-admin" && (
              <Link
                to="/"
                className={`cursor-pointer w-10 rounded-full p-2 ${theme === "dark" ? "hover:backdrop-brightness-200" : "hover:backdrop-brightness-95"}`}
              >
                <img src={theme === "dark" ? "../../public/logout-white.svg" : "../../public/logout-black.svg"} alt="user-icon" />
              </Link>
          )}
          <Toggle
            enabled={isEnabled}
            setEnabled={setIsEnabled}
            label={theme == "dark" ? "Dark" : "Light"}
          />
        </div>
      </div>
    </div>
  );
}
