import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FormControl, MenuItem, Select, SelectChangeEvent, Button, Snackbar, Alert } from '@mui/material';
import { addItemToCart } from '../../redux/slices/slice';
import { useAppDispatch } from '../../redux/hook';

interface PlantTypes {
  imgUrl: string,
  title: string,
  description: string,
  currPrice: number,
  originalPrice: number,
  discount: number,
  quantity: number,
  plantId: number,
}

const Plants: React.FC<PlantTypes> = ({
  imgUrl,
  title,
  description,
  currPrice,
  plantId,
  // originalPrice,
  // discount
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [open, setOpen] = useState(false);

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  const handleQuantityChange = (event: SelectChangeEvent<number>) => {
    setSelectedQuantity(event.target.value as number);
  };

  const addToCartHandler = () => {
    const product = {
      imgUrl,
      title,
      description,
      currPrice,
      selectedQuantity,
      plantId
    };
    dispatch(addItemToCart(product));
    setOpen(true);
  };

  return (
    <div className="container mx-auto h-1/4 my-5 py-9">
      <div className="grid md:grid-cols-2 h-full items-center gap-6">
        <div className="flex justify-center bg-gray-300 h-full rounded-lg overflow-hidden">
          <img
            src={imgUrl}
            alt="Plant"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Rs {currPrice}</div>
            <div className="flex items-center space-x-2">
              <label htmlFor="quantity" className="text-base text-gray-700">
                Quantity
              </label>
              <FormControl>
                <Select
                  labelId="quantity-select-label"
                  id="quantity-select"
                  value={selectedQuantity}
                  onChange={handleQuantityChange}
                  size="small"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button onClick={addToCartHandler} variant="contained" size="small" className="flex items-center">
              <ShoppingCartIcon className="mr-2" /> Add to Cart
            </Button>
            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                variant="outlined"
                sx={{ width: '100%', bgcolor: '#BAF5C2' }}
              >
                Item added to cart.
              </Alert>
            </Snackbar>
            <Button variant="contained" size="small">Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plants;
