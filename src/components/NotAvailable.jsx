import { useTheme } from "../context/themeContext";

export default function NotAvailable() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col w-full place-items-center rounded-lg p-6">
      <img className="text-center w-8 h-8" src="/x-svgrepo.svg" alt="" />
      <p
        className={`flex flex-col w-full place-items-center rounded-lg pt-4 ${
          theme === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        No se encontraron resultados...
      </p>
    </div>
  );
}
