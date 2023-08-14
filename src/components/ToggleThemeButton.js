import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../redux/ThemeSlice";

const ToggleThemeButton = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(updateTheme(currentTheme === "light" ? "dark" : "light"));
  };
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
