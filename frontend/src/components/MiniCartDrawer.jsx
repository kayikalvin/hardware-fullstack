// src/components/MiniCartDrawer.jsx
import React from "react";

export default function MiniCartDrawer({ isOpen, onClose, cart, removeFromCart, updateQuantity }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose}>&times;</button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p>${item.price} x {item.quantity}</p>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item._id)} className="text-red-500">Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
