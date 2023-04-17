import { findModuleIcon } from '../data/ModuleInfo';

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
                    altText: 'notebook with written list, next to a pair of glasses a pencil, and a highlighter'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 1 - Make a Plan',
                    headText: 'Choose two emergency meeting places',
                    info: 'One should be right outside your home in case of a sudden emergency, such as a fire.',
                    image: require('../assets/module1/MAP_Sec1_Img2.png'),
                    altText: 'people standing at emergency meeting place outside of home'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 1 - Make a Plan',
                    headText: 'Choose two emergency meeting places',
                    info: 'The other should be outside of your neighborhood, in case you cannot return home or are asked to evacuate.',
                    image: require('../assets/module1/MAP_Sec1_Img3.png'),
                    altText: 'people standing at emergency meeting place outside of neighborhood'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next Section',
                content: {
                    mod: 'Module 1 - Make a Plan',
                    headText: 'Plan ahead for your pets',
                    info: 'Due to health concerns, pets are not allowed in Red Cross shelters.\n\nCall your local humane society to ask if pet emergency shelters will be opened in a disaster.',
                    image: require('../assets/module1/MAP_Sec1_Img4.png'),
                    altText: 'a cat and a dog in a home'
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
                    altText: 'exterior of home, being viewed with magnifying glass'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Continue',
                content: {
                    mod: 'Module 1 - Make a Plan',
                    headText: '',
                    info: 'Take some time now and learn what disasters could happen in your community.',
                    image: require('../assets/module1/MAP_Sec2_Img2.png'),
                    altText: 'woman reading a book and looking on computer to learn more'
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
                    altText: 'infographic with text for five types of disasters: tornado, flood, wildfire, earthquake, hurricane. Tornado: Add a tornado safe room to your house. See FEMA publication 320 for more information. Flood: Floodproof your house with special building materials. Make sure you have the right amount of flood venting. Wildfire: Use fire resistant building materials, cut back brush and branches within 30 feet of your home, keep firewood at least 30 feet away. Earthquake: Secure furniture, appliances, and water heater to walls and floors. Install safety catches on cabinets and cupboards. Make sure appliances have flexible connectors. Hurricane: Install hurricane shutters. Keep trees trim to prevent falling branch damage. Make sure entryway doors have three hinges and dead bolt locks.'
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
                    altText: 'family meeting together on couch'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Continue',
                content: {
                    mod: 'Module 1 - Make a Plan',
                    headText: '',
                    info: 'Discuss how to prepare and respond to emergencies that are most likely to happen where you live, learn, work, and play.',
                    image: require('../assets/module1/MAP_Sec2_Img5.png'),
                    altText: 'two friends discussing Tornado shelter safety'
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
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 1,
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
    },
    {
        currentPage: 0,
        moduleContent: [
            {
                pageType: 'ModuleTitle',
                buttonText: 'Start',
                content: {
                    moduleNum: '3',
                    moduleName: 'Sheltering',
                    goal: 'Know how to respond safely when instructions are given to evacuate or take shelter.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 3 - Sheltering',
                    sectionNum: '1',
                    sectionTitle: 'Identify storm shelter and practice getting to there with your family',
                    image: require('../assets/module3/Sheltering_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: 'Stay Inside, away from windows and skylights',
                    info: 'Windows can be dangerous in a tornado or high winds.',
                    image: require('../assets/module3/Sheltering_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: 'Shelter down and in',
                    info: 'Put as many walls between yourself and the outside as you can (think of the ceiling as a wall).',
                    image: require('../assets/module3/Sheltering_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Avoid large rooms",
                    info: 'Avoid rooms with large ceiling expanses. Find an area large enough for everyone to stay comfortably for at least 45 minutes.',
                    image: require('../assets/module3/Sheltering_Sec1_Img4.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 3 - Sheltering',
                    sectionNum: '2',
                    sectionTitle: 'Learn how to safely shelter in place',
                    image: require('../assets/module3/Sheltering_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleTextOnly',
                buttonText: 'Continue',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: 'What does it mean?',
                    info: 'In an emergency like a chemical spill, you may be told to “shelter in place”. This means to make the place where you are a safe place to stay until the danger has passed. Shelter in place orders are given when it would be dangerous for you to go outside.',
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Stay Informed",
                    info: 'Turn on the television or radio to see if your area has been affected.',
                    image: require('../assets/module3/Sheltering_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Do the following...",
                    info: 'Close all doors and windows.\n\nShut off fans and air conditioning.\n\nGo to room with the least amount of doors and windows.',
                    image: require('../assets/module3/Sheltering_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Do NOT...",
                    info: 'Do not call 911 to get information about emergency.\n\nDo not leave your home if instructed to “Shelter in place”.',
                    image: require('../assets/module3/Sheltering_Sec2_Img4.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 3 - Sheltering',
                    sectionNum: '3',
                    sectionTitle: 'Make a Go Bag for emergency sheltering',
                    image: require('../assets/module3/Sheltering_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Shelter is available",
                    info: 'An emergency shelter will have water and food, and a place for you to sleep.',
                    image: require('../assets/module3/Sheltering_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Make a go bag",
                    info: 'Pack things that will not be provided by the shelter, such as pillow and blanket, medication, identification etc.',
                    image: require('../assets/module3/Sheltering_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Prohibited items",
                    info: 'Keep in mind, weapons or alcohol or pets (except for service animals) are not allowed at the shelter.',
                    image: require('../assets/module3/Sheltering_Sec3_Img4.png')
                }
            },
            // {
            //     pageType: 'ModuleChecklist',
            //     module: 3,
            //     moduleName: 'Sheltering',
            //     content: {
            //         mod: 'Module 3 - Sheltering',
            //         headText: '',
            //         info: '',
            //         image: require('../assets/module3/Sheltering_Icon.svg'),
            //     }
            // },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 3, hopefully you learned a bit more about sheltering.',
                    image: require('../assets/module3/Congratulations_Image.png'),
                }
            },
        ]
    },
    {
        currentPage: 0,
        moduleContent: [
            {
                pageType: 'ModuleTitle',
                buttonText: 'Start',
                content: {
                    moduleNum: '4',
                    moduleName: 'Food',
                    goal: 'Have an emergency food supply that will meet the needs of your household for three days without outside help.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 4 - Food',
                    sectionNum: '1',
                    sectionTitle: 'Buy a three-day emergency food supply for your household',
                    image: require('../assets/module4/Food_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: 'Store food for 3 days',
                    info: 'Have a 3 day supply of non-perishable food for your family.',
                    image: require('../assets/module4/Food_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: 'Choose Things that are easy to prepare',
                    info: 'Choose items that don’t need to be cooled, heated, or need a lot of water.',
                    image: require('../assets/module4/Food_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Pay attention to shelf life",
                    info: 'Look at the expiration date listed on the food item. Use and replace foods before the expiration date.',
                    image: require('../assets/module4/Food_Sec1_Img4.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 4 - Food',
                    sectionNum: '2',
                    sectionTitle: 'Take steps to make sure food in your refrigerator and freezer will stay safe',
                    image: require('../assets/module4/Food_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Install Thermometers",
                    info: 'Install a thermometer in your fridge and freezer so you will know if your food gets too warm.',
                    image: require('../assets/module4/Food_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Monitor Temperature",
                    info: 'If the temperature in your fridge stays above 41 degrees Fahrenheit for more than four hours, perishable food items may be unsafe to eat.',
                    image: require('../assets/module4/Food_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Reduce refrigerator temperature",
                    info: 'Turn down the temperature in your fridge or freezer if you think your power might go out.',
                    image: require('../assets/module4/Food_Sec2_Img4.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 4 - Food',
                    sectionNum: '3',
                    sectionTitle: 'Make sure you can meet any special dietary needs in your household',
                    image: require('../assets/module4/Food_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Consider Special Dietary Equipment",
                    info: 'If you use special equipment, like a blender, food scale, or feeding tubes, make sure you take those with you.',
                    image: require('../assets/module4/Food_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Build a menu for special diets",
                    info: 'Consider non-perishable menu options if you can’t get to a grocery store, or that can be prepared at an emergency shelter.',
                    image: require('../assets/module4/Food_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Build a menu for special diets",
                    info: 'Keep a description of your medical condition and the diet in your emergency kit.',
                    image: require('../assets/module4/Food_Sec3_Img4.png')
                }
            },
            // {
            //     pageType: 'ModuleChecklist',
            //     module: 3,
            //     moduleName: 'Sheltering',
            //     content: {
            //         mod: 'Module 3 - Sheltering',
            //         headText: '',
            //         info: '',
            //         image: require('../assets/module3/Sheltering_Icon.svg'),
            //     }
            // },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 4, hopefully you learned a bit more about food preparedness.',
                    image: require('../assets/module4/Congratulations_Image.png'),
                }
            },
        ]
    },
    {
        currentPage: 0,
        moduleContent: [
            {
                pageType: 'ModuleTitle',
                buttonText: 'Start',
                content: {
                    moduleNum: '5',
                    moduleName: 'Work, School & Communities',
                    goal: 'Make sure the people who count on you are prepared for a disaster.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 5 - Work, School & Communities',
                    sectionNum: '1',
                    sectionTitle: 'Make sure emergency procedures are in place for your workplace or school',
                    image: require('../assets/module5/WSC_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: 'Develop an emergency plan',
                    info: 'Talk to administrators at those places about their emergency plans. Ask for help planning for your family’s unique needs.',
                    image: require('../assets/module5/WSC_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: 'Consider everyone in your plan',
                    info: 'Make sure your plan will work for everyone.',
                    image: require('../assets/module5/WSC_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 5 - Work, School & Communities',
                    sectionNum: '2',
                    sectionTitle: 'Give emergency kits to people who count on you',
                    image: require('../assets/module5/WSC_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Make emergency kits for others",
                    info: 'Put together basic emergency kits for people who may not be able to do so for themselves or for those who may not think of doing it for themselves.',
                    image: require('../assets/module5/WSC_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Include prescriptions",
                    info: 'Make sure the kit meets their specific needs. For instance, if someone takes prescription medicine, include a list of medications and dosages.',
                    image: require('../assets/module5/WSC_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 5 - Work, School & Communities',
                    sectionNum: '3',
                    sectionTitle: 'Know how others in your community will respond in a disaster',
                    image: require('../assets/module5/WSC_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Learn about emergency plans",
                    info: 'Ask about emergency plans at your work, school, or other places your family members spend time.',
                    image: require('../assets/module5/WSC_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Know where emergency tools are",
                    info: 'Find out where emergency tools like fire extinguishers are kept in the places you spend time.',
                    image: require('../assets/module5/WSC_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 5, hopefully you have prepared for an emergency at work, in school, or in the community.',
                    image: require('../assets/module5/Congratulations_Image.png'),
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
                    moduleNum: '6',
                    moduleName: 'Unique Family Needs',
                    goal: 'Be aware of and prepare for your family’s unique needs.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 6 - Unique Family Needs',
                    sectionNum: '1',
                    sectionTitle: 'Talk with family members to identify your household’s unique needs',
                    image: require('../assets/module6/WSC_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: 'Things that might be special needs',
                    info: '1. Infants and young children\n2. Prescription medication\n3. Health-related supplies\n4. Assistive devices\n5. Pets',
                    image: require('../assets/module6/WSC_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: 'Don’t overlook small items',
                    info: 'Common items like diapers and pet food might not be easy to find right after a disaster.',
                    image: require('../assets/module6/WSC_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 6 - Unique Family Needs',
                    sectionNum: '2',
                    sectionTitle: 'Make a plan to make sure pets are taken care of in a disaster',
                    image: require('../assets/module6/WSC_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: "Make a plan for pets",
                    info: 'Disasters may strike while your pets are home alone.',
                    image: require('../assets/module6/WSC_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: "Have a neighbor check on your pets",
                    info: 'Ask a neighbor to check on your pets if you can’t get home in a disaster.',
                    image: require('../assets/module6/WSC_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 6 - Unique Family Needs',
                    sectionNum: '3',
                    sectionTitle: 'If you or someone in your household has a disability, create an evacuation plan that works for them',
                    image: require('../assets/module6/WSC_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: "Create an evacuation for those with special needs",
                    image: require('../assets/module6/WSC_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 6, hopefully you feel prepared for the unique needs of your family in an emergency.',
                    image: require('../assets/module6/Congratulations_Image.png'),
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
                    moduleNum: '7',
                    moduleName: 'Family Communication Plan',
                    goal: 'Have the ability to communicate with family members during a disaster.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    sectionNum: '1',
                    sectionTitle: 'Have a phone with a cord and a car charger for your cell phone in case of power failure',
                    image: require('../assets/module7/FCP_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: 'Keep a phone charger in your vehicle',
                    info: 'Charge your phone in your car if your home power goes out.',
                    image: require('../assets/module7/FCP_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: 'Know how to text',
                    info: 'A text message from your cell phone may get through when a phone call doesn’t. Make sure everyone in your family knows how to send and receive text messages.',
                    image: require('../assets/module7/FCP_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    sectionNum: '2',
                    sectionTitle: 'Develop a plan for how your family will stay in touch during a disaster',
                    image: require('../assets/module7/FCP_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "Make a communication Plan",
                    info: 'Develop a plan so you can stay in touch with your family in a disaster.',
                    image: require('../assets/module7/FCP_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "Have a long distance contact",
                    info: 'Choose someone outside of the local calling area to be your “outside the area” contact. Make sure all family members carry this phone number with them.',
                    image: require('../assets/module7/FCP_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    sectionNum: '3',
                    sectionTitle: 'Program In Case of Emergency (ICE) numbers into all family cell phones',
                    image: require('../assets/module7/FCP_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "Add Emergency contact to your address book",
                    info: 'If you have a cell phone, you can provide the phone numbers for your emergency contacts to first responders and hospital staff.',
                    image: require('../assets/module7/FCP_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "First responders will call ICE",
                    info: 'If you are hurt and can’t talk, first responders and hospital staff will now know how to contact your family right away.',
                    image: require('../assets/module7/FCP_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 7, hopefully your family has an established communication plan.',
                    image: require('../assets/module7/Congratulations_Image.png'),
                }
            }
        ]
    },
]

    export default modules;