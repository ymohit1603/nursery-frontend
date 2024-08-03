import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { SetStateAction, useState } from "react";


const Categories = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setValue(e.target.value);
    }

    return <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
    >
      <FormControlLabel value="Indoor" control={<Radio />} label="Indoor" />
      <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
      <FormControlLabel value="Other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
}

export default Categories;