import { useTheme } from "../context/themeContext";

export const Toggle = ({ enabled, setEnabled, label = "" }) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row-reverse gap-2 items-center">
      {label && (
        <span className={`mr-2 text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-900" }`}>{label}</span>
      )}
      <button
        type="button"
        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 cursor-pointer ${
          enabled ? "bg-gray-800" : "bg-gray-200"
        }`}
        onClick={() => setEnabled(!enabled)}
      >
        <span
          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};
