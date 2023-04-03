import Module1svg from '../assets/badge_icons/Make_a_Plan_Icon.svg'
import Module2svg from '../assets/badge_icons/Water_Icon.svg'
import Module3svg from '../assets/badge_icons/Sheltering_Icon.svg'
import Module4svg from '../assets/badge_icons/Food_Icon.svg'
import Module5svg from '../assets/badge_icons/Work_School_Community_Icon.svg'
import Module6svg from '../assets/badge_icons/Unique_Family_Needs_Icon.svg'
import Module7svg from '../assets/badge_icons/Family_Communication_Icon.svg'
import Module8svg from '../assets/badge_icons/Get_Involved_Icon.svg'
import Module9svg from '../assets/badge_icons/Information_Icon.svg'
import Module10svg from '../assets/badge_icons/Power_Icon.svg'
import Module11svg from '../assets/badge_icons/Emergency_Supplies_Icon.svg'
import Module12svg from '../assets/badge_icons/First_Aid_Icon.svg'

const moduleIconList = [Module1svg, Module2svg, Module3svg, Module4svg, Module5svg, Module6svg, Module7svg, Module8svg, Module9svg, Module10svg, Module11svg, Module12svg]

const findModuleIcon = (moduleNumber) => {
    return moduleIconList[moduleNumber - 1];
}

export {findModuleIcon};