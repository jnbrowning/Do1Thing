import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { findModuleIcon, findModuleButtonText } from '../data/ModuleInfo';
import { useFonts } from "expo-font";

export default function ModuleButton(props) {

    const {moduleNumber, navigation} = props;
    const SvgIcon = findModuleIcon(props.moduleNumber);

    let customFonts = {
        Roboto: require("../assets/fonts/RobotoRegular.ttf"),
        RobotoBold: require("../assets/fonts/RobotoBold.ttf")
      };
    const [fontsLoaded] = useFonts(customFonts);

    const modules = [
        {currentPage: 0,
        moduleContent: [
            {pageType: 'ModuleTitle',
            buttonText: 'Start',
            content: {
                moduleNum: '1',
                moduleName: 'Make a Plan',
                logo: require('../assets/test_assets/img1.jpg'),
                goal: 'Understand what puts you at risk from disasters and take steps to lower your risk.',
            }},
            {pageType: 'ModuleSectionHead',
            buttonText: "Let's Go",
            content: {
                mod: 'Module 1 - Make a Plan',
                sectionNum: '1',
                sectionTitle: 'Plan what to do if you have to evacuate',
                image: require('../assets/test_assets/img2.jpg'),
            }},
            {pageType: 'ModuleContent',
            buttonText: 'Next',
            content: {
                mod: 'Module 1 - Make a Plan',
                headText: 'Choose two emergency meeting places',
                info: 'One should be right outside your home in case of a sudden emergency, such as a fire.',
                image: require('../assets/test_assets/img3.jpg')
            }},
            {pageType: 'ModuleContent',
            buttonText: 'Next',
            content: {
                mod: 'Module 1 - Make a Plan',
                headText: 'Choose two emergency meeting places',
                info: 'The other should be outside of your neighborhood, in case you cannot return home or are asked to evacuate.',
                image: require('../assets/test_assets/img6.png')
            }},
            {pageType: 'ModuleContent',
            buttonText: 'Next Section',
            content: {
                mod: 'Module 1 - Make a Plan',
                headText: 'Plan ahead for your pets',
                info: 'Due to health concerns, pets are not allowed in Red Cross shelters.\n\nCall your local humane society to ask if pet emergency shelters will be opened in a disaster.',
                image: require('../assets/test_assets/img7.png')
            }},
            {pageType: 'ModuleSectionHead',
            buttonText: "Let's Go",
            content: {
                mod: 'Module 1 - Make a Plan',
                sectionNum: '2',
                sectionTitle: 'Take steps to prevent damage to your home',
                image: require('../assets/test_assets/img8.png'),
            }},
            {pageType: 'ModuleContent',
            buttonText: 'Continue',
            content: {
                mod: 'Module 1 - Make a Plan',
                headText: '',
                info: 'Take some time now and learn what disasters could happen in your community.',
                image: require('../assets/test_assets/img9.png')
            }},
            {pageType: 'ModuleTextOnly',
            buttonText: 'See Suggestions',
            content: {
                mod: 'Module 1 - Make a Plan',
                headText: 'Great!',
                info: 'Now that you know what disasters could happen in your community, there are things you can do to lower your risk of injury or property damage. Here are some suggestions.',
            }},
            {pageType: 'ModuleImageOnly',
            buttonText: 'Continue',
            content: {
                mod: 'Module 1 - Make a Plan',
                headText: 'Take Steps to Prevent Damage',
                image: require('../assets/test_assets/img10.png'),
            }},
            {pageType: 'ModuleSectionHead',
            buttonText: "Let's Go",
            content: {
                mod: 'Module 1 - Make a Plan',
                sectionNum: '3',
                sectionTitle: 'Meet with your family or household members',
                image: require('../assets/test_assets/img11.png'),
            }},
            {pageType: 'ModuleContent',
            buttonText: 'Continue',
            content: {
                mod: 'Module 1 - Make a Plan',
                headText: '',
                info: 'Discuss how to prepare and respond to emergencies that are most likely to happen where you live, learn, work, and play.',
                image: require('../assets/test_assets/img12.png')
            }},
            {pageType: 'ModuleCongrats',
            buttonText: 'Done',
            content: {
              info: 'You went through all the materials for Module 1, hopefully you learned a bit more about how to make a plan.',
              image: require('../assets/test_assets/img5.jpg'),
              }}
        ]}
    ]

    function goToModules(num) {
        console.log(num);
        const pageNum = modules[num - 1].currentPage;
        const modulePage = modules[num - 1].moduleContent[pageNum];
        if (pageNum === 0) {
            navigation.navigate(modulePage.pageType, {fullModule: modules[num - 1]});
        }
        else {
            navigation.navigate('ModuleResume', {fullModule: modules[num - 1]});
        }
    }
    if (!fontsLoaded) {
        return <TouchableOpacity onPress={()=>goToModules(moduleNumber)} style={styles.moduleContainer} />
    }
    else {
        return (
            <TouchableOpacity onPress={()=>goToModules(moduleNumber)} style={styles.moduleContainer}>
                <SvgIcon width={150} height={150} padding = {0} margin={-30} marginTop={-20} />
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
        shadowOffset: {width: 0, height: 1},
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
    }
})