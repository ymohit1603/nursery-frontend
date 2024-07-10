import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FormControl, MenuItem, Select, SelectChangeEvent, Button } from '@mui/material';
import { addItemToCart } from '../../redux/slices/slice';
import { useAppDispatch } from '../../redux/hook';

interface PlantTypes {
  imgUrl: string;
  title: string;
  description: string;
  currPrice: number;
  originalPrice: number;
  discount: number;
  quantity: number;
}

const Plants: React.FC<PlantTypes> = ({
  imgUrl,
  title,
  description,
  currPrice,
  // originalPrice,
  // discount

}) => {
    const [selectedQuantity, setSelectedQuantity] = React.useState<number>(1);
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
        selectedQuantity
      }
      dispatch(addItemToCart(product));  
     
      console.log("product added");
      }
      

    return (
      <div className="grid md:grid-cols-2 items-center max-w-6xl px-4 mx-auto py-6">
        <div className="grid h-80 w-80 items-start bg-gray-300">
          <img
            src={imgUrl}
            alt="Plant Image"
            width={600}
            height={600}
            className="aspect-square max-h-fit rounded-lg overflow-hidden"
          />
        </div>
        <div className="grid md:gap-8 items-start">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Rs {currPrice}</div>
            <div className="grid gap-2 items-start">
              <label htmlFor="quantity" className="text-base text-black">
                Quantity
              </label>
              <FormControl className="w-24">
                <Select
                  labelId="quantity-select-label"
                  id="quantity-select"
                  value={selectedQuantity}
                                onChange={handleQuantityChange}
                                size="small" className='w-16'
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
          <div className="flex space-x-4 ">
            <Button onClick={addToCartHandler} variant="contained" size="small" className="flex items-center">
              <ShoppingCartIcon className="mr-2" /> Add to Cart
            </Button>
            <Button variant="contained" size="small" >Buy now</Button>
          </div>
        </div>
      </div>
    )
};

export default Plants;