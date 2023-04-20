import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  import { Overlay } from 'react-native-elements';
  import { useFonts } from "expo-font";
  import { findModuleIcon } from '../data/ModuleInfo';
  
export default function BadgePopup(props) {
  const { badgeID } = props;
    const [overlayVisible, setOverlayVisible] = useState(true);
    let customFonts = {
      Roboto: require("../assets/fonts/RobotoRegular.ttf"),
      RobotoBold: require("../assets/fonts/RobotoBold.ttf")
    };
    const [fontsLoaded] = useFonts(customFonts);
    const SvgIcon = findModuleIcon(badgeID);

    const badgeTitles = ["Created an Account", "Completed Make a Plan Module", "Completed Water Module", "Completed Sheltering Module", "Completed Food Module", "Completed Work, School, & Community Module", "Completed Unique Family Needs Module", "Completed Family Communications Module", "Completed Get Involved Module", "Completed Information Module", "Completed Power Module", "Completed Emergency Supplies Module", "Completed First Aid Module"]
    const badgeDescriptions = ["Took your first step towards disaster prevention!", "Identified what puts you at risk from disasters and took steps to decrease risk", "Secured 3 days of water", "Learned how to respond safely when instructions are given to evacuate or take shelter", "Created an emergency food supply to support your family for three days", "Made sure the people who count on you are prepared for a disaster", "Made sure your family has everything they need during a disaster", "Set up ways to stay in touch with family members during a disaster", "Strengthened your community by getting trained and getting involved", "Made sure household members can receive, understand, and act on information received in an emergency", "Prepared to meet basic power needs during an electrical outage", "Identified important items that may be overlooked when leaving your home in a disaster", "Prepared to give first aid while waiting for an ambulance"]
    if (!fontsLoaded) {
      return <View></View>;
    } else { return(
<Overlay
          isVisible={overlayVisible}
          onBackdropPress={() => setOverlayVisible(false)}
          overlayStyle={styles.overlayView}
        >

          <Text style={styles.title}>
            You earned a badge!
          </Text>

          <SvgIcon width={150} height={150} padding={0} margin={-30} marginTop={-20} style={styles.icon} />
          <Text style={styles.badgeTitle}>{badgeTitles[badgeID]}</Text>
          <Text style={styles.badgeDescription}>{badgeDescriptions[badgeID]}</Text>
          <TouchableOpacity
            style={styles.okayButton}
            onPress={() => {
              setOverlayVisible(false);
            }}
          >
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableOpacity>
        </Overlay> 
  )
}
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        padding: '5%'
      },
      overlayView: {
        flex: .4,
        width: "70%",
        display: 'flex',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'RobotoBold'
      },
      okayButton: {
        width: "50%",
        height: "10%",
        backgroundColor: "#1d7dab",
        margin: '10%'
      },
      badgeTitle: {
        fontFamily: 'RobotoBold',
        fontSize:18,
        textAlign: 'center',
        margin: '5%'
      },
      badgeDescription: {
        fontFamily: 'Roboto',
        fontSize: 16,
        margin: '2%',
      }
  })