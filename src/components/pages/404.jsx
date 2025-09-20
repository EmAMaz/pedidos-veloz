
export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800/50 tracking-wider">
          404
        </h1>
        <p className="text-2xl mt-4 text-gray-400 font-semibold uppercase">
          Página no encontrada
        </p>
        <p className="mt-2 text-gray-500">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <a 
          href="/" 
          className="mt-8 inline-block px-6 py-3 text-sm font-medium leading-none text-white transition-colors duration-200 ease-in-out border border-transparent rounded-full bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-offset-gray-900"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};
