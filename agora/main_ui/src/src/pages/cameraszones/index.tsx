import React, { useState }  from 'react';
import {
  FluentProvider,
  webLightTheme,
  Text,
  makeStyles,
  Radio,
} from "@fluentui/react-components";
import Header from '../../components/SuiteHeader';
import SideMenu from "../../components/MaintenanceMenu";
import { Pivot, PivotItem } from '@fluentui/react';
import { IStackProps, IStackTokens, Stack } from "@fluentui/react";
import { Panel, PanelType, DefaultButton } from '@fluentui/react';

import { CopilotProvider } from "@fluentui-copilot/react-copilot";
import logo from './logo.svg';
import '../../App.css';
import Cameras from '../../components/MaintenanceCameras';
const Main = (props: IStackProps) => (
    <Stack horizontal grow={1} disableShrink {...props} />
  );
  const useStyles = makeStyles({
    categoryTextStyles: {
        gap: "36px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      },
      pivotStyles: {
        marginTop: '60px',
      },
      cameraimagecontainer: {
        display: 'flex',
        width: '100%',
        height: '396px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: '0',
        background: '#EBF3FC',
      },
      cameraimage: {
        display: 'flex',
        paddingTop: '4px',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#115EA3',
        textAlign: 'center',
        leadingTrim: 'both',
        textEdge: 'cap',
        fontFamily: 'Segoe UI',
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '14px',
        letterSpacing: '0.3px',
        }
});

const themedMediumStackTokens: IStackTokens = {
childrenGap: "m",
padding: "m",
};
const categoryTextStyles = {
  root: {
    width: '14.28%', // 100% / 7 for equal width
    height: '100%',
    
  },
};
const CamerasZones = () => {
    const styles = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <FluentProvider theme={webLightTheme}>
        <CopilotProvider mode='sidecar'>
          <Header />
          <Main>
          <Panel
        isOpen={isDrawerOpen}
        onDismiss={toggleDrawer}
        type={PanelType.custom}
        customWidth="25%"
        headerText="Add camera"
      >
        <Stack>
            <Stack.Item>
              <div className={styles.cameraimagecontainer}>
                <div className={styles.cameraimage}>Camera Feed</div>
              </div>
            </Stack.Item>
            <Stack.Item>
              <Radio label="Camera 1" type='radio' />
            </Stack.Item>
            <Stack.Item>
                <Text>Camera name</Text>
            </Stack.Item>
            <Stack.Item>
                <Text>Camera name</Text>
            </Stack.Item>
        </Stack>
      </Panel>
          <Stack.Item>
              <SideMenu />
          </Stack.Item>
          <Stack.Item grow={3}>
          <Pivot className={styles.pivotStyles}>
            <PivotItem headerText="Cameras">
              <div>
                {/* Content for Vegetables tab */}

                <Cameras callParentFunction={toggleDrawer}/>
              </div>
            </PivotItem>
            <PivotItem headerText="Zones">
              <div>
                {/* Content for Fruits tab */}
                <Text className={styles.categoryTextStyles}>Vegetables</Text>
              </div>
            </PivotItem>
          </Pivot>
          </Stack.Item>
          </Main>
        </CopilotProvider>
      </FluentProvider>
    );
  };
  
  export default CamerasZones;
