import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Grid, GridItem, Center } from "@chakra-ui/react";
import formatTime from "./formatTime";
import formatDate from "./formatDate";

const ConfirmPrompt = ({ parkingParams }) => {
  const [currentPrompt, setCurrentPrompt] = useState(1);
  const [promptTextClass, setPromptTextClass] = useState();
  const startDate = new Date(parkingParams.startDate);
  const startDateString = formatDate(startDate);
  const startTimeString = formatTime(startDate);

  console.log("these params: " + JSON.stringify(parkingParams));

  const confirm = () => {
    setCurrentPrompt(currentPrompt + 1);
    setPromptTextClass("move-out");
  };

  return (
    <Center>
      <Grid>
        <GridItem className={promptTextClass}>
          Your parking will begin on <b>{startDateString}</b> at{" "}
          <b>{startTimeString}</b>
        </GridItem>
        <GridItem>
          <Center>
            <Button onClick={confirm}>Confirm</Button>
          </Center>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default ConfirmPrompt;
