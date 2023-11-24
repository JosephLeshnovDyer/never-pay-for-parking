import { Grid, GridItem } from "@chakra-ui/react";
import Calendar from "./Calendar";
import ConfirmPrompt from "./ConfirmPrompt";
import { useState } from "react";

const UserFlow = () => {
  const coeff = 1000 * 60 * 30;
  const startDate = new Date(Math.round(new Date().getTime() / coeff) * coeff);
  const [parkingParams, setParkingParams] = useState({
    startDate: startDate,
    endDate: "",
    location: "",
  });

  return (
    <Grid>
      <GridItem>
        <Calendar parkingParams={parkingParams} setDate={setParkingParams} />
      </GridItem>
      <GridItem>
        <ConfirmPrompt parkingParams={parkingParams} />
      </GridItem>
    </Grid>
  );
};

export default UserFlow;
