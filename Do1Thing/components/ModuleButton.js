import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { findModuleIcon } from '../data/ModuleIcons';

export default function ModuleButton(props) {

    const {moduleNumber, navigation} = props;
    const SvgIcon = findModuleIcon(props.moduleNumber);

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
                info: 'Due to health concerns, pets are not allowed in Red Cross shelters.\nCall your local humane society to ask if pet emergency shelters will be opened in a disaster.',
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
        ]}
    ]

    function goToModules(num) {
        console.log(num);
        const pageNum = modules[num - 1].currentPage;
        const modulePage = modules[num - 1].moduleContent[pageNum];
        navigation.navigate(modulePage.pageType, {fullModule: modules[num - 1]});
    }

    return (
        <TouchableOpacity onPress={()=>goToModules(moduleNumber)}>
            <SvgIcon width={120} height={120}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    moduleContainer: {
        width: '52%',
        height: 150,
        backgroundColor: '#FFFFFF'
      }
})