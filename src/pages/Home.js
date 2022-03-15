import React from 'react'
import Button from "../button/Gb";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

function Home (){
  return (
    <div>
        <FormControl fullWidth={false}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        <h1>Home Pages</h1>
        <Button />
    </div>
    
  )
}

export default Home;