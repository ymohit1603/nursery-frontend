import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { SetStateAction, useState } from "react";


const PriceFilter = () => {

    const [value, setValue] = useState('');

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setValue(e.target.value);
    }


    return <FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">Price</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      <FormControlLabel value="ascending" control={<Radio />} label="Low to High" />
      <FormControlLabel value="descending" control={<Radio />} label="High to Low" />
    </RadioGroup>
  </FormControl>
}

export default PriceFilter;