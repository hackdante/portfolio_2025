"use client";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";

interface CounterUI {
  value?: number
}

export const Counter = ({value = 0}: CounterUI) => {
  const [counter, setCounter] = useState(value);

  function addItem(currentCounter: number) {
    setCounter(currentCounter + 1);
  }

  function removeItem(currentCounter: number) {
    if (currentCounter < 1) return;
    setCounter(currentCounter - 1);
  }

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          type="button"
          className="flex break-inside bg-black text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white"
          onClick={() => addItem(counter)}
        >
          <div className="m-auto">
            <div className="flex items-center justify-start flex-1 space-x-4">
              <MdAddCircle size={40} />
              <span className="font-medium mb-[-3px]">Agregar</span>
            </div>
          </div>
        </button>
        <button
          type="button"
          className="flex break-inside bg-black text-white border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white"
          onClick={() => removeItem(counter)}
        >
          <div className="m-auto">
            <div className="flex items-center justify-start flex-1 space-x-4">
              <MdRemoveCircle size={40} />
              <span className="font-medium mb-[-3px]">Quitar</span>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};
