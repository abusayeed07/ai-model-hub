import { use } from "react";
import ModelCard from "../models/ModelsCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Choose Your AI Model</h2>
        <p className="text-gray-600">One subscription gives you access to all frontier AI models</p>
      </div>

      {/* Changed: Added auto-rows-fr to make all rows equal height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {models.map((model) => (
          <ModelCard 
            key={model.id} 
            model={model} 
            carts={carts} 
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;