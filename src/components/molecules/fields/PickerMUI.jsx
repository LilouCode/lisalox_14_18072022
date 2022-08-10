import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export const PickerMUI = ({ control }) => {
  return (
    <section>
      <label>MUI Picker</label>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="MUIPicker"
          control={control}
          render={({ field: { ref } }) => (
            <DatePicker
              label="Basic example"
              renderInput={(params) => <TextField {...params} />}
            />
          )}
        />
      </LocalizationProvider>
    </section>
  );
};
