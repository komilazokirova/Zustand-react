import { useThemeStore } from "../store/themeStore";

const Light = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div>
      <h2>Light</h2>
      <p>{theme}</p>
    </div>
  );
};

export default Light;