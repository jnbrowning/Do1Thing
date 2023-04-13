import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { findModuleIcon, findModuleButtonText } from '../data/ModuleInfo';
import { useFonts } from "expo-font";

export default function ModuleButton(props) {

    const { moduleNumber, navigation } = props;
    const SvgIcon = findModuleIcon(props.moduleNumber);

    let customFonts = {
        Roboto: require("../assets/fonts/RobotoRegular.ttf"),
        RobotoBold: require("../assets/fonts/RobotoBold.ttf")
    };
    const [fontsLoaded] = useFonts(customFonts);

    const modules = [
        {
            currentPage: 0,
            moduleContent: [
                {
                    pageType: 'ModuleTitle',
                    buttonText: 'Start',
                    content: {
                        moduleNum: '1',
                        moduleName: 'Make a Plan',
                        logo: require('../assets/test_assets/img1.jpg'),
                        goal: 'Understand what puts you at risk from disasters and take steps to lower your risk.',
                    }
                },
                {
                    pageType: 'ModuleSectionHead',
                    buttonText: "Let's Go",
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        sectionNum: '1',
                        sectionTitle: 'Plan what to do if you have to evacuate',
                        image: require('../assets/module1/MAP_Sec1_Img1.png'),
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: 'Choose two emergency meeting places',
                        info: 'One should be right outside your home in case of a sudden emergency, such as a fire.',
                        image: require('../assets/module1/MAP_Sec1_Img2.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: 'Choose two emergency meeting places',
                        info: 'The other should be outside of your neighborhood, in case you cannot return home or are asked to evacuate.',
                        image: require('../assets/module1/MAP_Sec1_Img3.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next Section',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: 'Plan ahead for your pets',
                        info: 'Due to health concerns, pets are not allowed in Red Cross shelters.\n\nCall your local humane society to ask if pet emergency shelters will be opened in a disaster.',
                        image: require('../assets/module1/MAP_Sec1_Img4.png')
                    }
                },
                {
                    pageType: 'ModuleSectionHead',
                    buttonText: "Let's Go",
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        sectionNum: '2',
                        sectionTitle: 'Take steps to prevent damage to your home',
                        image: require('../assets/module1/MAP_Sec2_Img1.png'),
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Continue',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: '',
                        info: 'Take some time now and learn what disasters could happen in your community.',
                        image: require('../assets/module1/MAP_Sec2_Img2.png')
                    }
                },
                {
                    pageType: 'ModuleTextOnly',
                    buttonText: 'See Suggestions',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: 'Great!',
                        info: 'Now that you know what disasters could happen in your community, there are things you can do to lower your risk of injury or property damage. Here are some suggestions.',
                    }
                },
                {
                    pageType: 'ModuleImageOnly',
                    buttonText: 'Continue',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: 'Take Steps to Prevent Damage',
                        image: require('../assets/module1/MAP_Sec2_Img3.png'),
                    }
                },
                {
                    pageType: 'ModuleSectionHead',
                    buttonText: "Let's Go",
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        sectionNum: '3',
                        sectionTitle: 'Meet with your family or household members',
                        image: require('../assets/module1/MAP_Sec2_Img4.png'),
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Continue',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: '',
                        info: 'Discuss how to prepare and respond to emergencies that are most likely to happen where you live, learn, work, and play.',
                        image: require('../assets/module1/MAP_Sec2_Img5.png')
                    }
                },
                {
                    pageType: 'ModuleChecklist',
                    module: 1,
                    moduleName: 'Make a Plan',
                    content: {
                        mod: 'Module 1 - Make a Plan',
                        headText: '',
                        info: 'Discuss how to prepare and respond to emergencies that are most likely to happen where you live, learn, work, and play.',
                        image: require('../assets/test_assets/img1.jpg'),
                    }
                },
                {
                    pageType: 'ModuleCongrats',
                    buttonText: 'Done',
                    content: {
                        info: 'You went through all the materials for Module 1, hopefully you learned a bit more about how to make a plan.',
                        image: require('../assets/module1/Congratulations_Image.png'),
                    }
                }
            ]
        },
        {
            currentPage: 0,
            moduleContent: [
                {
                    pageType: 'ModuleTitle',
                    buttonText: 'Start',
                    content: {
                        moduleNum: '2',
                        moduleName: 'Water',
                        logo: require('../assets/test_assets/img2_1.png'),
                        goal: 'Have 72 hours (3 days) worth of water stored for your household.',
                    }
                },
                {
                    pageType: 'ModuleSectionHead',
                    buttonText: "Let's Go",
                    content: {
                        mod: 'Module 2 - Water',
                        sectionNum: '1',
                        sectionTitle: 'Determine how much water is needed',
                        image: require('../assets/module2/Water_Sec1_Img1.png'),
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: 'Water Needed Per Day',
                        info: 'To prepare for an emergency, plan to have one gallon (4 liters) per person per day.',
                        image: require('../assets/module2/Water_Sec1_Img2.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: 'Total Water Needed',
                        info: 'Determine total water needed by multiplying the number of people by 3 - that is how many gallons you need!',
                        image: require('../assets/module2/Water_Sec1_Img3.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Don't Forget Pets",
                        info: 'Include an extra one gallon (4 liters) for a medium size pet. That one gallon should last three days, but plan for more or less if your pet is very large or very small.',
                        image: require('../assets/module2/Water_Sec1_Img4.png')
                    }
                },
                {
                    pageType: 'WaterCalculate',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Calculate Your Water Need",
                    }
                },
                {
                    pageType: 'ModuleSectionHead',
                    buttonText: "Let's Go",
                    content: {
                        mod: 'Module 2 - Water',
                        sectionNum: '2',
                        sectionTitle: 'How to get enough water',
                        image: require('../assets/module2/Water_Sec2_Img1.png'),
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Purchasing Water",
                        info: 'Option 1: Purchase enough water at the store.\n\nPurchased water should be replaced once a year',
                        image: require('../assets/module2/Water_Sec2_Img2.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Bottling Your Own",
                        info: 'Option 2: Bottle your own water. Begin by finding water containers. Do NOT use milk jugs.',
                        image: require('../assets/module2/Water_Sec2_Img3.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Bottling Your Own",
                        info: 'Next, be sure to clean the containers before filling them with water.',
                        image: require('../assets/module2/Water_Sec2_Img4.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Bottling Your Own",
                        info: 'Finally, bottle enough water for your household.',
                        image: require('../assets/module2/Water_Sec2_Img5.png')
                    }
                },
                {
                    pageType: 'ModuleSectionHead',
                    buttonText: "Let's Go",
                    content: {
                        mod: 'Module 2 - Water',
                        sectionNum: '3',
                        sectionTitle: 'Important Things to Keep in Mind',
                        image: require('../assets/module2/Water_Sec3_Img1.png'),
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Store Water in the Freezer",
                        info: 'If possible, store water in the freezer. This will keep the water fresh tasting and your food colder in a power outage!',
                        image: require('../assets/module2/Water_Sec3_Img2.png')
                    }
                },
                {
                    pageType: 'ModuleContent',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: "Drink Enough Water",
                        info: 'If supplies run low, never ration water. Drink the amount you need today and look for more tomorrow.',
                        image: require('../assets/module2/Water_Sec3_Img3.png')
                    }
                },
                {
                    pageType: 'ModuleTextOnly',
                    buttonText: 'Next',
                    content: {
                        mod: 'Module 2 - Water',
                        headText: 'Learn Other Ways to Get Water in a Disaster',
                        info: 'Did you know you can get water from your pipes or hot water heater in an emergency?\n\nThese methods can be dangerous if done incorrectly, so make sure to do your research and understand what you are doing before trying these.',
                    }
                },
                {
                    pageType: 'ModuleCongrats',
                    buttonText: 'Done',
                    content: {
                        info: 'You went through all the materials for Module 2, hopefully you learned a bit more about water preparedness.',
                        image: require('../assets/module2/Congratulations_Image.png'),
                    }
                }
            ]
        }]

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