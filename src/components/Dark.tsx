import { useThemeStore } from "../store/themeStore";

const Dark = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div>
      <h2>Dark</h2>
      <p>{theme}</p>

      <button onClick={toggleTheme}>
        O'zgartirish
      </button>
    </div>
  );
};

export default Dark;