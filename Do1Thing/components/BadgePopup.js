import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  import { Overlay } from 'react-native-elements';
  
export default function BadgePopup(badgeID) {
    const [overlayVisible, setOverlayVisible] = useState(true);

    return (
<Overlay
          isVisible={overlayVisible}
          onBackdropPress={() => setOverlayVisible(false)}
          overlayStyle={styles.overlayView}
        >
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