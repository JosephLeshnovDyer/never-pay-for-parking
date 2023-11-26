import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Grid, GridItem, Center } from "@chakra-ui/react";
import formatTime from "./formatTime";
import formatDate from "./formatDate";

const ConfirmPrompt = ({ parkingParams }) => {
  // const [currentPrompt, setCurrentPrompt] = useState(1);
  const [promptTextClass, setPromptTextClass] = useState("fade-in");
  const [promptButtonClass, setPromptButtonClass] = useState("fade-in");
  const startDate = new Date(parkingParams.startDate);
  const startDateString = formatDate(startDate);
  const startTimeString = formatTime(startDate);
  const [promptArgs, setPromptArgs] = useState({
    beginEnd: "begin",
    buttonStr: "Yep!",
  });

  console.log("these params: " + JSON.stringify(parkingParams));

  const confirm = () => {
    // setCurrentPrompt(currentPrompt + 1);
    setPromptButtonClass("fade-out");
    setTimeout(() => {
      setPromptTextClass("fade-out");
    }, 150);
  };

  const bringIn = (e) => {
    if (e.animationName === "fade-out") {
      setPromptArgs({
        beginEnd: "end",
        buttonStr: "That's right!",
      });
    }
    setPromptTextClass("fade-in");
    setPromptButtonClass("fade-in");
  };

  return (
    <Center>
      <Grid>
        <GridItem>
          <div
            className={promptTextClass}
            onTransitionEnd={() => console.log("ended")}
          >
            Your parking will {promptArgs.beginEnd} on <b>{startDateString}</b>{" "}
            at <b>{startTimeString}</b>
          </div>
        </GridItem>
        <GridItem>
          <Center>
            <Button
              colorScheme="blue"
              onClick={confirm}
              className={promptButtonClass}
              onAnimationEnd={(e) => bringIn(e)}
            >
              {promptArgs.buttonStr}
            </Button>
          </Center>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default ConfirmPrompt;
