import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export const DatePickerField = ({label, name}) =>{
    const [value, setValue] = useState(null);
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        name = {name}
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} name="BirthDate" />}
      />
    </LocalizationProvider>
    )
}