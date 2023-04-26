import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    color: "white",
  },
  formControl: {
    minWidth: 150,
  },
  select: {
    color: "white",
  },
}));

const Navbar = ({ selectedValue, handleSelectChange }) => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Digital Crew
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id='dropdown-label' className={classes.select}>
            Filters
          </InputLabel>
          <Select
            labelId='dropdown-label'
            id='dropdown'
            value={selectedValue}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='all'>All</MenuItem>
            <MenuItem value="men's clothing">Men's Clothing👕</MenuItem>
            <MenuItem value="women's clothing">Women's Clothing👕</MenuItem>
            <MenuItem value='jewelery'>Jewelery💎</MenuItem>
            <MenuItem value='electronics'>Electronics🔌</MenuItem>
            <MenuItem value='dec'>Price High to low👇</MenuItem>
            <MenuItem value='inc'>Price Low to High☝️</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
