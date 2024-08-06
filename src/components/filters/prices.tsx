import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface priceTypes{
  value: string | null
  setValue: Dispatch<SetStateAction<string | null>>
}

const PriceFilter = ({value,setValue}:priceTypes) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
    }
  
    const handleClick = (newValue: string) => {
      if (value === newValue) {
        setValue(null);
      }
    }

  return (<FormControl>
    <FormLabel id="demo-controlled-radio-buttons-group">Price</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
        
    >
      <FormControlLabel value="ascending" control={<Radio onClick={() => handleClick("ascending")} />} label="Low to High" />
      <FormControlLabel value="descending" control={<Radio onClick={() => handleClick("descending")} />} label="High to Low" />
    </RadioGroup>
  </FormControl>);
}

export default PriceFilter;