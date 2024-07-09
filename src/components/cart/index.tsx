import ItemCard from "../card/shoppingItemCard";
import Checkout from "./checkout";


const ShoppingCart: React.FC = () => {
    return (
      <div className="bg-gray-100 max-w-screen min-h-screen pb-28 ">
        <div className="flex flex-col items-center  pt-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
          <div className="">
            <ItemCard imgUrl="" quantity={1} title="Sample Item" price={29.00} />
            <ItemCard imgUrl="" quantity={2} title="Another Item" price={19.00} />
          </div>
        </div>
        <div className=" ">
          <Checkout price={0} tax={0} totalPrice={0}/>
        </div>
      </div>
    );
  }

export default ShoppingCart;