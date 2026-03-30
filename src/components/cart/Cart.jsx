import { Trash } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payement successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);

    

    toast.success("Item deleted!");
  };

  return (
    <div className=" p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-2xl p-5">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between border rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.image}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="text-3xl font-bold">${item.price}/month</div>

                  <button
                    onClick={() => handleDelete(item)}
                    className=" btn rounded-full btn-error">
                    <Trash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>$ {totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-red-500 text-white text-2xl  rounded-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;