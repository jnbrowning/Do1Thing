import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import { toggleCheckbox } from '../data/Actions';
import { SafeAreaView } from 'react-native-safe-area-context';

const CheckboxList = ({navigation, route}) => {


    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.list}>
            {items.map((item) => (
                <View key={item.id} style={styles.listItem}>
                    <CheckBox
                        containerStyle={styles.checkboxContainer}
                        checked={item.checked}
                        onPress={() => dispatch(toggleCheckbox(item))}
                    />
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>
            ))}
        </View>
        </SafeAreaView>
    );
};

// const initialState = {
//   items: [
//     { id: 1, text: 'Find out what kind of disasters can happen where you live and plan what to do in a disaster.', checked: false },
//     { id: 2, text: 'Protect your house from damage in a disaster.', checked: false },
//     { id: 3, text: 'Plan what to do if you have to leave your house in an emergency.', checked: false },
//   ],
// };

// const itemsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'TOGGLE_CHECKBOX':
//       return {
//         ...state,
//         items: state.items.map(item =>
//           item.id === action.payload.id
//             ? { ...item, checked: !item.checked }
//             : item,
//         ),
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   items: itemsReducer,
// });

// export const store = createStore(rootReducer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    container: {
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

export default CheckboxList;