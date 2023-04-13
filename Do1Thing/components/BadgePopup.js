import {
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
  import { Overlay } from 'react-native-elements';
  import Badge from "../components/Badge";
  import { useState } from "react";
  
function BadgePopup(props) {

    const { badge } = props;
    const [overlayVisible, setOverlayVisible] = useState(true);

    console.log('load badge popup ', badge)

    return (

        <Overlay
          isVisible={overlayVisible}
          onBackdropPress={() => setOverlayVisible(false)}
          overlayStyle={styles.overlayView}
        >
          <Badge badge={badge}/>
          <Text style={styles.overlayText}>
            You earned a badge!
          </Text>
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

const styles = StyleSheet.create({
    buttonText: {
        textAlign: "center",
        top: "25%",
        color: "white",
        fontWeight: "bold",
        fontSize: "18pt",
      },
      overlayView: {
        height: "20%",
        width: "60%",
      },
      overlayText: {
        margin: "10%",
      },
      okayButton: {
        width: "50%",
        height: "30%",
        backgroundColor: "black",
        margin: "auto",
        // borderRadius: "70%",
        left: "25%",
      },
  })

  export default BadgePopup;