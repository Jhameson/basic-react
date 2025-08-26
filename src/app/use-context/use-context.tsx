// Importa o contexto e hooks do React
import { ComponentContext } from "./context";
import { useContext, useState, useCallback } from "react";

export const UseContextExample = () => {
  // Estado compartilhado via contexto
  const [count, setCount] = useState(0);
  // Função para incrementar o contador
  const increment = useCallback(() => setCount((c) => c + 1), []);
  // Função para decrementar o contador
  const decrement = useCallback(() => setCount((c) => c - 1), []);

  // Valor do contexto, incluindo dados e funções
  const contextValue = {
    name: "Context API",
    count,
    increment,
    decrement,
  };

  // Provider envolve os componentes filhos, tornando o contexto acessível
  return (
    <ComponentContext.Provider value={contextValue}>
      <div className="flex flex-col">
        <span className="text-center">
          Exemplo de uso do useContext() com funções
        </span>
        <div className="mt-3 border rounded-sm w-full h-full gap-4 p-5 bg-gray-800">
          <span className="col-span-2 text-center">Componente Pai</span>
          <ComponentOne />
        </div>
      </div>
    </ComponentContext.Provider>
  );
};
// Componente filho que consome o contexto e manipula o estado compartilhado

// Obtém o valor do contexto
const ComponentOne = () => {
  const context = useContext(ComponentContext);
  if (!context) return null;
  return (
    <div className="mt-3 border rounded-sm w-full h-full gap-4 p-5 bg-gray-600">
      <span>Componente filho</span>
      <span className="text-sm text-gray-300">
        Valor do contexto: {context.name}
      </span>
      <div className="flex gap-2 items-center mt-2">
        <button
          className="px-2 py-1 bg-blue-500 rounded"
          onClick={context.increment}
        >
          Incrementar
        </button>
        <button
          className="px-2 py-1 bg-red-500 rounded"
          // Componente neto que também consome o contexto
          onClick={context.decrement}
          // Obtém o valor do contexto
        >
          Decrementar
        </button>
        <span className="ml-2">Contador: {context.count}</span>
      </div>
      <ComponentTwo />
    </div>
  );
};

const ComponentTwo = () => {
  const context = useContext(ComponentContext);
  if (!context) return null;
  return (
    <div className="mt-3 border rounded-sm w-full h-full gap-4 p-5 bg-gray-700">
      <span>Componente Neto</span>
      <span className="text-sm text-gray-300">
        Valor do contexto: {context.name}
      </span>
      <span className="ml-2">Contador: {context.count}</span>
    </div>
  );
};
