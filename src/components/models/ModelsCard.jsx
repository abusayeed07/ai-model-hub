import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const isInCart = carts.find((item) => item.id === model.id);

  const [isSubscribed, setIsSubscribed] = useState(!!isInCart);

  useEffect(() => {
    const inCart = carts.find((item) => item.id === model.id);
    setIsSubscribed(!!inCart);
  }, [carts, model.id]);

  const handleSubscription = () => {

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, model]);
    setIsSubscribed(true);
    
    if (model.price === 0) {
      toast.success("Free item added to cart!");
    } else {
      toast.success("Item added to cart!");
    }
  };

  return (
    <div className="h-full flex flex-col shadow-lg rounded-lg border overflow-hidden border-zinc-300 hover:shadow-xl transition-shadow">
      
      <div className="flex justify-center items-center h-48 bg-zinc-100">
        <img 
          className="h-32 w-32 object-contain" 
          src={model.image} 
          alt={model.title}
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2 line-clamp-1">{model.title}</h2>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px]">
          {model.description}
        </p>
        
        <div className="mt-auto">
          <div className="text-2xl font-bold mb-4">
            {model.price === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>${model.price}<span className="text-sm text-gray-500">/month</span></span>
            )}
          </div>
          
          <button
            onClick={handleSubscription}
            disabled={isSubscribed}
            className={`btn w-full rounded-lg py-3 transition-colors ${
              isSubscribed 
                ? "bg-gray-400 cursor-not-allowed text-white" 
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            {isSubscribed ? "✓ Subscribed" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;