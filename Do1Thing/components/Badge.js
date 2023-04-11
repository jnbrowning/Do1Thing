import {
  Image,
  StyleSheet,
} from "react-native";

export default function Badge(badgeID) {


  function determineBadgeIcon() {
    if (badgeID.badge === 1) {
      return require("../assets/badge_icons/Sign_Up_Icon.png");
    } 
    if (badgeID.badge === 2) {
      return require("../assets/badge_icons/Make_a_Plan_Icon.svg");
    } 
    if (badgeID.badge === 3) {
      return require("../assets/badge_icons/Water_Icon.svg");
    }  if (badgeID.badge === 4) {
      return require("../assets/badge_icons/Sheltering_Icon.svg");
    } 
    if (badgeID.badge === 5) {
      return require("../assets/badge_icons/Food_Icon.svg");
    } 
    if (badgeID.badge === 6) {
      return require("../assets/badge_icons/Work_School_Community_Icon.svg");
    } 
    if (badgeID.badge === 7) {
      return require("../assets/badge_icons/Unique_Family_Needs_Icon.svg");
    } 
    if (badgeID.badge === 8) {
      return require("../assets/badge_icons/Family_Communication_Icon.svg");
    } 
    if (badgeID.badge === 9) {
      return require("../assets/badge_icons/Get_Involved_Icon.svg");
    } 
    if (badgeID.badge === 10) {
      return require("../assets/badge_icons/Information_Icon.svg");
    } 
    if (badgeID.badge === 11) {
      return require("../assets/badge_icons/Power_Icon.svg");
    } 
    if (badgeID.badge === 12) {
      return require("../assets/badge_icons/Emergency_Supplies_Icon.svg");
    } 
    if (badgeID.badge === 13) {
      return require("../assets/badge_icons/First_Aid_Icon.svg");
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