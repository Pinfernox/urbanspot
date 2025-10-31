// src/app/page.tsx


import MapLoader from '@/components/MapLoader'; // 1. Importa cargador del mapa

export default function Home() {
  
  return (
    
    <main className="flex flex-col h-screen w-screen">
      
      <header className="bg-white shadow-md p-4 z-10">
        <h1 className="text-2xl font-bold text-gray-800">🏙️ UrbanSpot</h1>
      </header>

      {/* 3. Renderizar el MapLoader */}
      <div className="flex-grow relative">
        <MapLoader />
      </div>

    </main>
  );
}