import DatePicker from "react-datepicker";
import { Center } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ setDate, parkingParams }) => {
  // const format = "YYYY-MM-DD HH:mm";
  const params = parkingParams;

  const calDate = (selectedDate) => {
    params.startDate = selectedDate;
    setDate((prevState) => ({
      ...prevState,
      startDate: selectedDate,
    }));
  };

  return (
    <Center>
      <DatePicker
        showTimeSelect
        selected={params.startDate}
        onChange={(date) => calDate(date)}
        inline
      />
    </Center>
  );
};

export default Calendar;
