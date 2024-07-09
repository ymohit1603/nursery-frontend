import React from 'react';

interface checkoutTypes {
  price: number;
  tax: number;
  totalPrice: number;
  discount?: number;
  currencySymbol?: string;
  buttonText?: string;
  additionalInfo?: string;
}

const Checkout: React.FC<checkoutTypes> = ({
  price,
  tax,
  totalPrice,
  discount = 0,
  currencySymbol = '$',
  buttonText = 'Checkout',
  additionalInfo
}) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="text-gray-700">Subtotal</div>
          <div className="text-gray-900">{currencySymbol}{price.toFixed(2)}</div>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <div className="text-gray-700">Discount</div>
            <div className="text-gray-900">-{currencySymbol}{discount.toFixed(2)}</div>
          </div>
        )}
        <div className="flex justify-between">
          <div className="text-gray-700">Tax</div>
          <div className="text-gray-900">{currencySymbol}{tax.toFixed(2)}</div>
        </div>
        <div className="flex justify-between font-semibold">
          <div className="text-gray-700">Order Total</div>
          <div className="text-gray-900">{currencySymbol}{totalPrice.toFixed(2)}</div>
        </div>
        {additionalInfo && (
          <div className="text-center text-sm text-gray-600 mt-4">
            {additionalInfo}
          </div>
        )}
        <button className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
