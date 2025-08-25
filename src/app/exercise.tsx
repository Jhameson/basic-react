import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IExercise {
  id: number;
  name: string;
  description: string;
}

export const Exercise = () => {
  const navigate = useNavigate();

  const [exercises, setExercises] = useState<IExercise[]>([]);

  useEffect(() => {
    fetch("/exercises.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
      {exercises.map((value, index) => {
        return (
          <div
            key={index}
            className="p-4 border rounded-sm border-slate-700  cursor-pointer hover:bg-slate-800 hover:scale-105 transition-all text-center"
            onClick={() => {
              navigate("/exercise/" + value.id);
            }}
          >
            <span>{value.name}</span>
            <p>{value.description}</p>
          </div>
        );
      })}
    </div>
  );
};
