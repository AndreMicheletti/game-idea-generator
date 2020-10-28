import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function renderItems (itemList) {
  return itemList.map((item) => {
    return (
      <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
    );
  });
}

export default function Selector(props) {
  const classes = useStyles();

  const { options, name, handleChange, selected } = props;

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="selector-label">{name}</InputLabel>
      <Select
        labelId="selector-label"
        id="selector"
        value={selected}
        onChange={handleChange}
        label={name}
      >
        {renderItems(options)}
      </Select>
    </FormControl>
  );
}
