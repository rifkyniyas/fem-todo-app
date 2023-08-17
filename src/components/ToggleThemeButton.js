import { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../redux/ThemeSlice";

const ToggleThemeButton = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const dispatch = useDispatch();
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    dispatch(updateTheme(newTheme));
    document.querySelector("html").classList.toggle("dark");
  };
  useEffect(() => {
    if (currentTheme == "dark")
      document.querySelector("html").classList.add("dark");
  }, []);

  return (
    <button onClick={toggleTheme}>
      <Image
        src={`
        ${
          currentTheme == "light"
            ? "/images/icon-moon.svg"
            : "/images/icon-sun.svg"
        }`}
        alt={`"Toggle Light Theme Icon"`}
        width={24}
        height={24}
      />
    </button>
  );
};

export default ToggleThemeButton;
