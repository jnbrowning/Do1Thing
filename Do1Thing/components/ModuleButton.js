import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { findModuleIcon, findModuleButtonText } from '../data/ModuleInfo';
import { useFonts } from "expo-font";
import modules from '../data/ModuleData';

export default function ModuleButton(props) {

    const { moduleNumber, navigation } = props;
    const SvgIcon = findModuleIcon(props.moduleNumber);

    let customFonts = {
        Roboto: require("../assets/fonts/RobotoRegular.ttf"),
        RobotoBold: require("../assets/fonts/RobotoBold.ttf")
    };
    const [fontsLoaded] = useFonts(customFonts);

    function goToModules(num) {
        console.log(num);
        const pageNum = modules[num - 1].currentPage;
        const modulePage = modules[num - 1].moduleContent[pageNum];
        if (pageNum === 0) {
            navigation.navigate(modulePage.pageType, { fullModule: modules[num - 1] });
        }
        else {
            navigation.navigate('ModuleResume', { fullModule: modules[num - 1] });
        }
    }
    if (!fontsLoaded) {
        return <TouchableOpacity onPress={() => goToModules(moduleNumber)} style={styles.moduleContainer} />
    }
    else {
        return (
            <TouchableOpacity onPress={() => goToModules(moduleNumber)} style={styles.moduleContainer}>
                <SvgIcon width={150} height={150} padding={0} margin={-30} marginTop={-20} style={styles.icon} />
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>{findModuleButtonText(props.moduleNumber)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    moduleContainer: {
        height: 173,
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 40px rgba(29, 125, 171, 0.1)',
        borderRadius: 15,
        shadowColor: '#1d7dab',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 40,
    },
    buttonTextContainer: {
        paddingTop: 5,
        height: 40,
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'RobotoBold',
        color: '#1D7DAB'
    },
})