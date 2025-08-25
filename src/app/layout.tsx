import { ChevronLeft } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 min-h-screen flex flex-col items-center p-2">
      <header className="w-full mt-8 mb-8 flex items-center justify-between border-b border-slate-700 pb-4 px-6 shadow-lg ">
        {location.pathname !== "/" ? (
          <button
            className="cursor-pointer p-2 rounded-full hover:bg-slate-800 transition-colors duration-200 shadow-md"
            onClick={() => navigate(-1)}
            aria-label="Voltar"
          >
            <ChevronLeft
              size={28}
              className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
            />
          </button>
        ) : (
          <span className="w-7" />
        )}
        <h1 className="text-3xl font-extrabold text-center flex-1 text-slate-100 tracking-tight">
          Exercícios React
        </h1>
        <span className="w-7" />
      </header>
      <main className="w-full px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
