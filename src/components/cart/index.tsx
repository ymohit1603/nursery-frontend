import ItemCard from "../card/shoppingItemCard";


const ShoppingCart: React.FC = () => {
    return (
      <div className="flex flex-col items-center min-h-screen max-w-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="">
          <ItemCard imgUrl="" quantity={1} title="Sample Item" price={29.00} />
          <ItemCard imgUrl="" quantity={2} title="Another Item" price={19.00} />
        </div>
      </div>
    );
  }

export default ShoppingCart;