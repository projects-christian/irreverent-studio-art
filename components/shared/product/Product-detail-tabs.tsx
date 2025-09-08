// components/ProductTabs.tsx
"use client";

import { useState } from "react";

const TABS = ["Descripción", "Información adicional", "Valoraciones"] as const;

export default function ProductDetailTabs() {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>("Descripción");

  return (
    <div className="w-full mx-auto">
      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-200 dark:border-gray-700">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-all duration-200
              ${
                activeTab === tab
                  ? "border-greenForest text-greenForest dark:text-greenForest-light"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-800 dark:text-gray-200">
        {activeTab === "Descripción" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Descripción del producto</h3>
            <p>Este producto está diseñado con los más altos estándares de calidad...</p>
          </div>
        )}
        {activeTab === "Información adicional" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Información adicional</h3>
            <ul className="list-disc pl-5">
              <li>Material: Aluminio y vidrio templado</li>
              <li>Dimensiones: 50x30x20 cm</li>
              <li>Origen: Hecho en España</li>
            </ul>
          </div>
        )}
        {activeTab === "Valoraciones" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Valoraciones</h3>
            <p>⭐⭐⭐⭐☆ - "Muy buena calidad, lo recomiendo!"</p>
            <p>⭐⭐⭐⭐⭐ - "Excelente producto, llegó rápido."</p>
          </div>
        )}
      </div>
    </div>
  );
}
