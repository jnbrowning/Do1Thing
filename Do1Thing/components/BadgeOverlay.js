import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { findModuleIcon } from '../data/ModuleInfo';
import { StyleSheet } from 'react-native';

const SvgIcon1 = findModuleIcon(1);
const SvgIcon2 = findModuleIcon(2);
const SvgIcon3 = findModuleIcon(3);
const SvgIcon4 = findModuleIcon(4);
const SvgIcon5 = findModuleIcon(5);
const SvgIcon6 = findModuleIcon(6);
const SvgIcon7 = findModuleIcon(7);
const SvgIcon8 = findModuleIcon(8);
const SvgIcon9 = findModuleIcon(9);
const SvgIcon10 = findModuleIcon(10);
const SvgIcon11 = findModuleIcon(11);
const SvgIcon12 = findModuleIcon(12);

const BadgeOverlay = ({moduleNumber}) => {
    const [visible, setVisible] = useState(true);
    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const renderContent = () => {
        switch (moduleNumber) {
            case 1:
                return <SvgIcon1 style={styles.badge} />
            case 2:
                return <SvgIcon2 style={styles.badge} />
            case 3:
                return <SvgIcon3 style={styles.badge} />
            case 4:
                return <SvgIcon4 style={styles.badge} />
            case 5:
                return <SvgIcon5 style={styles.badge} />
            case 6:
                return <SvgIcon6 style={styles.badge} />
            case 7:
                return <SvgIcon7 style={styles.badge} />
            case 8:
                return <SvgIcon8 style={styles.badge} />
            case 9:
                return <SvgIcon9 style={styles.badge} />
            case 10:
                return <SvgIcon10 style={styles.badge} />
            case 11:
                return <SvgIcon11 style={styles.badge} />
            case 12:
                return <SvgIcon12 style={styles.badge} />

            default:
                return <Text>No content found</Text>;
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View>
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-end' }}
                        onPress={toggleOverlay}
                    >
                        <Icon name="times" size={24} />
                    </TouchableOpacity>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {renderContent()}
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                        You've earned a new badge!
                    </Text>
                </View>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        width: 150,
        height: 150,
    },
});

export default BadgeOverlay;
