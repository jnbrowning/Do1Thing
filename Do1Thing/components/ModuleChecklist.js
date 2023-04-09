import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import {saveAndDispatch, _toggleCheckbox} from '../data/DB';
import { actionTypes } from '../data/Actions';
import { toggleCheckbox } from "../data/Actions";
import { signOutFB, subscribeToUsersCollection, getFBAuth, subscribeToChecklistCollection } from '../data/DB';
import { useEffect } from "react";

function ModuleChecklist({ navigation, route }) {
    const currentPage = route.params.fullModule.currentPage;
    const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
    const pageContent = route.params.fullModule.moduleContent[currentPage];
    const modName = route.params.fullModule.moduleContent[currentPage].moduleName
    const moduleNumber = route.params.fullModule.moduleContent[currentPage].module;
    let link = pageContent.content.image;

    useEffect(() => {
        subscribeToChecklistCollection(dispatch);
    },[])

    // Subset of items that match the current module
    const items = useSelector((state) => {
        return state.items
            .filter((item) => item[module] === currentPage.module)
            .sort((a, b) => a.order - b.order);
    });

    // To make persistence simple we update the state with all items
    const allItems = useSelector((state) => state.items);

    const disableButton = () => { return items.filter((item) => item.checked === true).length !== 3 ? true : false }
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        const previousPage = route.params.fullModule.moduleContent[currentPage - 1].pageType;
                        route.params.fullModule.currentPage -= 1;
                        navigation.navigate(previousPage, { fullModule: route.params.fullModule })
                    }}>
                    <Ionicons name="chevron-back-circle-sharp" size={35} color='#1D7DAB' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ModulesScreen')}>
                    <AntDesign name="close" size={30} color="#9D9D9D" />
                </TouchableOpacity>
            </View>

            <CustomImageWithText module={moduleNumber} moduleName={modName} link={link} />

            <View style={styles.checkBoxContainer}>
                <View style={styles.list}>
                    {items.map((item) => (
                        <View key={item.id} style={styles.listItem}>
                            <CheckBox
                                containerStyle={styles.checkboxContainer}
                                checked={item.checked}
                                onPress={async () => {
                                    await saveAndDispatch({ type: actionTypes.TOGGLE_CHECKBOX, payload: { items: allItems, id: item.id} }, dispatch);
                                }}
                            />
                            <Text style={styles.itemText}>{item.text}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <Button
                style={ !disableButton() ? styles.startButton : styles.buttonDisabled}
                variant="contained"
                title={<Text accessibilityLabel="continue, button" variant="button" style={{ color: 'white' }}>Continue</Text>}
                disabled={disableButton()}
                onPress={() => {
                    console.log("button pressed")
                    route.params.fullModule.currentPage += 1;
                    navigation.navigate(nextPage.pageType, { fullModule: route.params.fullModule })
                }}
            />
        </View>
    )
}

const CustomImageWithText = ({ module, moduleName, link }) => {
    return (
        <View style={imageStyles.container}>
            <Image
                style={imageStyles.image}
                source={link}
            />
            <View style={imageStyles.textContainer}>
                <Text style={styles.moduleHeading}>Module {module} - Checklist</Text>
                <Text style={styles.goalHeader}>{moduleName}</Text>
            </View>
        </View>
    );
};

const imageStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        //margin: "5%",
        margin: "5%",
        marginTop: 22
    },
    textContainer: {
        flex: 1,
        //justifyContent: 'space-between',
        height: 100, // Set the height of the text container to match the image height
        marginLeft: 10,
    },
    text: {
        fontSize: 18,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bodyContainer: {
        backgroundColor: '#fff',
        flex: 0.95,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: 'tan',
        width: '100%',
    },
    heading: {
        fontSize: 24,
        color: 'black',
        paddingBottom: '5%',
        paddingTop: '5%',
        fontWeight: 'bold'
    },
    testIcon: {
        flex: 1,
        width: '80%',
        marginTop: 40,
        marginBottom: 30,
        alignSelf: 'center',
        color: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 25,
    },
    backButton: {
        padding: '7%',
        justifyContent: 'center',
    },
    moduleHeading: {
        color: '#12B1C3',
        fontSize: 24,
        paddingLeft: '2%',
        marginTop: 17,

    },
    goalHeader: {
        paddingLeft: '2%',
        color: "#1D7DAB",
        fontSize: '34',
        fontWeight: 'bold',
        marginTop: 0,
    },
    goalText: {
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '5%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0E5681',
    },
    startButton: {
        backgroundColor: '#2E8540',
        width: '65%',
        padding: '3%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
    },
    buttonDisabled: {
        backgroundColor: '#9D9D9D',
        width: '65%',
        padding: '3%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
    },
    goalBlock: {
        justifyContent: 'center',
        flex: 0.8,
        marginBottom: 60,
        width: '100%',
    },
    infoText: {
        fontSize: 20,
        color: 'black',
        marginLeft: '10%',
        marginRight: '10%',
    },
    checkBoxContainer: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        backgroundColor: '#fff',
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Align the checkbox with the top of the text
        marginBottom: 10,
    },
    checkboxContainer: {
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingLeft: "7%", // Add horizontal padding
        paddingRight: "5%",
        // Add vertical padding
        paddingVertical: "5%"
    },
    // Other styles
    itemText: {
        fontSize: 18,
        flex: 1, // Make the text component take up remaining width in the row
        flexWrap: 'wrap', // Wrap text when it reaches the end of the line
        paddingRight: "5%", // Add vertical padding
        paddingVertical: "5%"
    },
});

export default ModuleChecklist;