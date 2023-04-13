import {
  Image,
  StyleSheet,
} from "react-native";

function Badge(props) {

  const {badge} = props;

  function determineBadgeIcon() {
    if (badge === 1) {
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
        width: "18%",
        height: "100%",
        // borderRadius: "100%",
        margin: '2%',
      },
    })

export default Badge;