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
                    // logo: require('../assets/test_assets/img1.jpg'),
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
                    // image: require('../assets/test_assets/img1.jpg'),
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
                    // logo: require('../assets/test_assets/img2_1.png'),
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
                    logo: require('../assets/module3/Sheltering_Icon.svg'),
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
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 3, hopefully you learned a bit more about sheltering.',
                    image: require('../assets/module3/Congratulations_Image.png'),
                }
            }
        ]
    },]

    export default modules;