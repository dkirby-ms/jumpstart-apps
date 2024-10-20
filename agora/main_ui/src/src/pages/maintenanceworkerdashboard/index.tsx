import React from 'react';
import {
  FluentProvider,
  webLightTheme,
  makeStyles,
  tokens,
  Text,
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  MessageBarActions,
  Button,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import SuiteHeader from '../../components/SuiteHeader';
import SideMenu from "../../components/SideMenu";
import { Default as Banner } from "../../components/Banner";
import Cards from "../../components/Cards";
import Greetings from "../../components/Greetings";
import Greeting from "../../components/Greeting";
import InventoryStatus from "../../components/InventoryStatus";
import Health from "../../components/Health";
import { IStackProps, IStackTokens, Stack } from "@fluentui/react";
import NumberOfProductsManufacturedGraph from "../../components/NumberOfProductsManufacturedGraph";
import OEEPerPlantGraph from "../../components/OEEPerPlantGraph";
import OEEByProductsGraph from "../../components/OEEByProductsGraph";
import { CopilotProvider } from "@fluentui-copilot/react-copilot";
import logo from './logo.svg';
import '../../App.css';
import Cameras from '../../components/Cameras';
const Main = (props: IStackProps) => (
    <Stack horizontal grow={1} disableShrink {...props} />
  );

const themedMediumStackTokens: IStackTokens = {
childrenGap: "m",
padding: "m",
};

const useStyles = makeStyles({
  frameheader: {
      color: tokens.colorNeutralForeground1Static,
      fontFamily: "var(--Font-family-Base, 'Segoe UI')",
      fontSize: "16.849px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "23.589px", /* 140% */    
    },
    container: {
      gap: "36px",
      marginBottom: "13.48px"
    }
});

const MaintenanceWorkerDashboard = () => {
  const classes  = useStyles();
    return (
        <FluentProvider theme={webLightTheme}>
        <CopilotProvider mode='sidecar'>
          <SuiteHeader />
          <Main>
          <Stack.Item>
              <SideMenu />
          </Stack.Item>
          <Stack.Item grow={3}>
            <Stack tokens={themedMediumStackTokens}>
              <Stack>
                <Greeting />
              </Stack>
              <Stack id='Dashboard'>
                <Stack className={classes.container}>
                <MessageBar intent="error">
                  <MessageBarBody>
                    <MessageBarTitle>HotMelt has errors</MessageBarTitle>
                    Copilot detects that the HotMelt sensor in FFR2 line has errors happened in 3 hours ago
                  </MessageBarBody>
                  <MessageBarActions
                    containerAction={
                      <Button appearance="transparent" icon={<DismissRegular />} />
                    }
                  >
                    <Button>Ask Genie</Button>
                  </MessageBarActions>
                </MessageBar>
                </Stack>
                <Stack className={classes.container}>
                <Cards />
                </Stack>  
                <Stack className={classes.container} horizontal>
                <NumberOfProductsManufacturedGraph />
                <OEEPerPlantGraph />
                <OEEByProductsGraph />
                </Stack>                  
              </Stack>
            </Stack>
            <Stack id='Equipment'>
              <Stack>
                <Text className={classes.frameheader}>Equipments</Text>
                <InventoryStatus />
              </Stack>
            </Stack>
          </Stack.Item>
          </Main>
        </CopilotProvider>
      </FluentProvider>
    );
  };
  
  export default MaintenanceWorkerDashboard;