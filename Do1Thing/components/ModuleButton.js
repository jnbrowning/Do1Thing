import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { findModuleIcon } from '../data/ModuleIcons';

export default function ModuleButton(props) {

    const SvgIcon = findModuleIcon(1);

    return (
        <TouchableOpacity>
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