import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchCart } from "../../redux/slices/slice";
import ItemCard from "../card/shoppingItemCard";
import Checkout from "./checkout";
import {  Container, Typography, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items); 
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    setIsEmpty(cart.length === 0);
  }, [cart]);

  return (
    <div className=" max-w-screen min-h-screen pb-28">
      <div className="flex flex-col items-center pt-8">
        <div>
          {!isEmpty&&<h1 className="text-4xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>}
          {!isEmpty ? (
            cart.map((item) => (
              <ItemCard
                key={item.id}
                imgUrl={item.imgUrl}
                quantity={item.quantity}
                title={item.title}
                price={item.currPrice}
                id={item.id}
              />
            ))
          ) : (
              <EmptyCart/>
          )}
        </div>
        {!isEmpty && (
          <div className="mt-8">
            <Checkout price={0} tax={0} totalPrice={0} />
          </div>
        )}
      </div>
    </div>
  );
};

function EmptyCart() {
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        minHeight: 'screen',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 4,
        py: 12,
        mt:4
      }}
    >
      <Box textAlign="center" maxWidth="md">
        <ShoppingCartIcon sx={{ fontSize: 90, color: 'black' }} />
        <Typography className="font-bold"
          component="h1"
          variant="h2"
          color="text.primary"
          mt={4}
          mb={2}
        >
          Your cart is empty
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          mt={2}
        >
          Looks like you haven't added any items to your cart yet. Start shopping to add items to your cart.
        </Typography>
      </Box>
    </Container>
  );
}

export default ShoppingCart;




