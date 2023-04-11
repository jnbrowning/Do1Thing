import {
  Image,
  StyleSheet,
} from "react-native";

export default function Badge(badgeID) {


  function determineBadgeIcon() {
    if (badgeID.badge === 1) {
      return require("../assets/badge_icons/Sign_Up_Icon.png");
    } 
  }

    return (
          <Image
          source={determineBadgeIcon()}
          style={styles.badge}>
          </Image>  
    )
}

const styles = StyleSheet.create({
    badge: {
        width: 80,
        height: 80,
        // borderRadius: "100%",
        margin: '2%',
      },
    })