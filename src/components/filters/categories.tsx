import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface categoryTypes {
  value: string | null
  setValue: Dispatch<SetStateAction<string | null>>
}


const Categories = ({value,setValue}:categoryTypes) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  }

  const handleClick = (newValue: string) => {
    if (value === newValue) {
      setValue(null);
    }
  }

  return (
    <FormControl>
      <FormLabel id="categories-radio-buttons-group-label">Categories</FormLabel>
      <RadioGroup
        aria-labelledby="categories-radio-buttons-group-label"
        name="categories-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel 
          value="Indoor" 
          control={<Radio onClick={() => handleClick("Indoor")} />} 
          label="Indoor" 
        />
        <FormControlLabel 
          value="Outdoor" 
          control={<Radio onClick={() => handleClick("Outdoor")} />} 
          label="Outdoor" 
        />
        <FormControlLabel 
          value="Other" 
          control={<Radio onClick={() => handleClick("Other")} />} 
          label="Other" 
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Categories;
