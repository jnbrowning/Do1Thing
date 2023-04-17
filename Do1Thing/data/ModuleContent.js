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
                    logo: require('../assets/module1/Make_a_Plan_Icon.svg'),
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
                    image: require('../assets/module1/Make_a_Plan_Icon.svg'),
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
                    logo: require('../assets/module2/Water_Icon.svg'),
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
                    logo: require('../assets/module4/Food_Icon.svg'),
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
                    logo: require('../assets/module5/Work_School_Community_Icon.svg'),
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
                    logo: require('../assets/module6/Unique_Family_Needs_Icon.svg'),
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
                    logo: require('../assets/module7/Family_Communication_Icon.svg'),
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
    {
        currentPage: 0,
        moduleContent: [
            {
                pageType: 'ModuleTitle',
                buttonText: 'Start',
                content: {
                    moduleNum: '8',
                    moduleName: 'Involved',
                    logo: require('../assets/module8/Get_Involved_Icon.svg'),
                    goal: 'Make your community stronger by getting trained and getting involved.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 8 - Involved',
                    sectionNum: '1',
                    sectionTitle: 'Connect with an isolated individual in your neighborhood or start a neighborhood organization',
                    image: require('../assets/module8/Involved_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: 'Isolated individuals are more vulnerable',
                    info: 'Isolated individuals are more vulnerable during and after a disaster. They are less likely to ask for help or follow emergency instructions.',
                    image: require('../assets/module8/Involved_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: 'Take time to meet them in your neighborhood',
                    info: 'Take time to meet them. Help them make a plan for emergencies, and include checking on them in your plan.',
                    image: require('../assets/module8/Involved_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 8 - Involved',
                    sectionNum: '2',
                    sectionTitle: 'Promote emergency preparedness in your community',
                    image: require('../assets/module8/Involved_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "MPost preparedness information",
                    info: 'Include a Do1Thing preparedness topic in newsletters or on bulletin boards each month.',
                    image: require('../assets/module8/Involved_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Make emergency kits for seniors and children",
                    info: 'Get a group together to make emergency kits for seniors or kids who stay home alone.',
                    image: require('../assets/module8/Involved_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Learn how others are promoting preparedness",
                    info: 'Find the materials that will work best for your organization and become a partner in preparing your community!',
                    image: require('../assets/module8/Involved_Sec2_Img4.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 8 - Involved',
                    sectionNum: '3',
                    sectionTitle: 'Become a volunteer in your community',
                    image: require('../assets/module8/Involved_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Sign up to volunteer",
                    info: 'If you are interested in helping in your community or other communities during a disaster, become a volunteer for your local Red Cross or Salvation Army chapter.',
                    image: require('../assets/module8/Involved_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Volunteer now",
                    info: 'Don’t wait for disaster to strike—volunteer now. These organizations won’t send untrained volunteers into disaster areas.',
                    image: require('../assets/module8/Involved_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 8, hopefully you learned a bit more about being informed.',
                    image: require('../assets/module8/Congratulations_Image.png'),
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
                    moduleNum: '9',
                    moduleName: 'Informed',
                    logo: require('../assets/module9/Information_Icon.svg'),
                    goal: 'Make sure everyone in your household can receive, understand, and act on information received in an emergency.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 9 - Informed',
                    sectionNum: '1',
                    sectionTitle: 'Make sure everyone in your family knows what to do when they hear emergency warnings',
                    image: require('../assets/module9/Informed_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: 'Warning Sirens',
                    info: 'Call your local fire department to find out if your area is covered by warning sires, when they are tested, and when they would be activated.',
                    image: require('../assets/module9/Informed_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: 'Other ways to get the message',
                    info: 'Some communities have other ways of warning residents. Call your police or fire department to find out how emergency warning messages will be sent. ',
                    image: require('../assets/module9/Informed_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 9 - Informed',
                    sectionNum: '2',
                    sectionTitle: 'Get a NOAA Emergency Alert Radio',
                    image: require('../assets/module9/Informed_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Weather can change quickly",
                    info: 'Severe weather may strike when people are sleeping or unaware of the forecast. This can be deadly if people do not seek a safe shelter',
                    image: require('../assets/module9/Informed_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Get a weather radio",
                    info: 'A weather radio will wake you up in an emergency warning is issued.\n\nThey can be purchased at stores that sell electronics. Prices start at about $20.00',
                    image: require('../assets/module9/Informed_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 9 - Informed',
                    sectionNum: '3',
                    sectionTitle: 'Make sure everyone in your household can communicate in a disaster',
                    image: require('../assets/module9/Informed_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Make sure everyone in your household can communicate in a disaster",
                    image: require('../assets/module9/Informed_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Have someone to help with communication",
                    info: 'If you think you may not be able to understand emergency information, identify someone (or more than one person) that you can contact for help in an emergency.',
                    image: require('../assets/module9/Informed_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 9, make sure everyone can receive, understand, and act on emergency information.',
                    image: require('../assets/module9/Congratulations_Image.png'),
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
                    moduleNum: '10',
                    moduleName: 'Power',
                    logo: require('../assets/module10/Power_Icon.svg'),
                    goal: 'Be able to safely meet your basic needs during an electrical outage. ',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 10 - Power',
                    sectionNum: '1',
                    sectionTitle: 'Have flashlights ready in an easily accessible place and check batteries in flashlights and radios',
                    image: require('../assets/module10/Power_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: 'Use battery operated flashlights',
                    info: 'When lights go out, the safest way to provide emergency lighting is with flashlights or battery-powered lanterns.',
                    image: require('../assets/module10/Power_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: 'Store Extra Batteries',
                    info: 'Always keep a supply of extra batteries. Think about buying a rechargeable flashlight. Batteries might be hard to find in a disaster.',
                    image: require('../assets/module10/Power_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 10 - Power',
                    sectionNum: '2',
                    sectionTitle: 'Acquire and learn how to safely use a portable generator',
                    image: require('../assets/module10/Power_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Talk to an electrician",
                    info: 'Talk to an electrician about what kind of generator will work for your home.',
                    image: require('../assets/module10/Power_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Learn how to use a generator",
                    info: 'Learn how to use a generator to make electricity for your home when the power goes out.\n\nNever operate a generator inside your house.',
                    image: require('../assets/module10/Power_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 10 - Power',
                    sectionNum: '3',
                    sectionTitle: 'Create a power outage plan to minimize the effect on your household',
                    image: require('../assets/module10/Power_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Have at least one phone with a cord",
                    info: 'Home phones (not cell phones) that have cordless handsets won’t work when the power goes out.',
                    image: require('../assets/module10/Power_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Always keep your gas tank at least half full",
                    info: 'Gas stations might be closed in a disaster. Make sure your car always has gas.',
                    image: require('../assets/module10/Power_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Have a car charger for your cell phone",
                    info: 'You will still be able to charge your cell phone in your car if the power goes out.',
                    image: require('../assets/module10/Power_Sec3_Img4.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 10, hopefully you learned a bit more about preparing for an electrical outage.',
                    image: require('../assets/module10/Congratulations_Image.png'),
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
                    moduleNum: '11',
                    moduleName: 'Emergency Supplies',
                    logo: require('../assets/module11/Emergency_Supplies_Icon.svg'),
                    goal: 'Remember important items that may be overlooked when leaving your home in a disaster.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    sectionNum: '1',
                    sectionTitle: 'Gather your emergency supplies in an accessible place',
                    image: require('../assets/module11/ES_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: 'Have a go bag ready',
                    image: require('../assets/module11/ES_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleTextOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: 'Think about these items for your go bag:',
                    info: "- Battery powered radio and extra batteries\n- Flashlight with extra batteries\n- Lightweight blankets\n- Emergency information, including insurance policies\n- A list of medications and correct dosage, and doctor’s names\n- Personal items such as toothbrushes, soap, extra glasses, etc.\n- Whistle\nFirst aid kit\n- Change of clothing\nNon-perishable snacks\n- Books, cards or magazines to pass the time",
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Consider these additional items for medical conditions:",
                    info: "Empty pill bottle(s) or a list of current medications\nYour doctor’s phone number",
                    image: require('../assets/module11/ES_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleTextOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: 'Consider these additional items for pets:',
                    info: "- Pet food & water\n- Collar with ID tags\n- Pet medication(s)\n- Pet carriers and leashes\n- Medical records from vet\n- Photos of your pet\n- Microchip information\n",
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    sectionNum: '2',
                    sectionTitle: 'Create an emergency supply kit for your pet, your car, and your workplace or school',
                    image: require('../assets/module11/ES_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a go bag for your car",
                    image: require('../assets/module11/ES_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a Supply kit for your Pet",
                    info: 'Disaster can strike when you are away from home, if you travel with your pet regularly, make sure that you have an emergency kit for them as well.',
                    image: require('../assets/module11/ES_Sec2_Img3.png')
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a go bag for your school",
                    image: require('../assets/module11/ES_Sec2_Img4.png')
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a go bag for your office",
                    image: require('../assets/module11/ES_Sec2_Img5.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    sectionNum: '3',
                    sectionTitle: 'Stash some cash in case ATMs and credit card machines are not usable in a disaster',
                    image: require('../assets/module11/ES_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "ATM Machines may not work",
                    info: 'Many things that we take for granted are not available when there is no power. ATM machines may not work.',
                    image: require('../assets/module11/ES_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Stash some cash",
                    info: 'Some experts say you should have at minimum $150.00 in cash stashed away. Realizing this may not be possible for everyone, any amount is good to start with.',
                    image: require('../assets/module11/ES_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Build your stash weekly, if necessary",
                    info: 'Take $1.00 a week and place it in an envelope in your emergency kit. In just a little time, you will have some cash stashed away for us in emergencies.',
                    image: require('../assets/module11/ES_Sec3_Img4.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 11, hopefully you have prepared an emergency supplies kit and a go bag.',
                    image: require('../assets/module11/Congratulations_Image.png'),
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
                    moduleNum: '12',
                    moduleName: 'First Aid',
                    logo: require('../assets/module12/First_Aid_Icon.svg'),
                    goal: 'Be prepared to give first aid while waiting for an ambulance.',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 12 - First Aid',
                    sectionNum: '1',
                    sectionTitle: 'Know what to do while waiting for an ambulance to arrive',
                    image: require('../assets/module12/FA_Sec1_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: 'Call 911',
                    info: '- Stay on the line with 911 and follow Emergency Instructions\n\n- Stay calm and try to keep the patient calm',
                    image: require('../assets/module12/FA_Sec1_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: 'DO NOT do these while help is on the way',
                    info: "- Don’t move a patient who was injured in an automobile accident or fall, or who was found unconscious.\n\n- Don’t give an injured person anything to eat or drink (Unless instructed by the 911 dispatcher)",
                    image: require('../assets/module12/FA_Sec1_Img3.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: 'DO these while help is on the way',
                    info: "- If the patient is cold, cover them with a blanket\n\n- Have someone watch for the ambulance and show the crew how to get to the patient. (Especially important in apartment or office buildings, or if your address is hard to see from the street).",
                    image: require('../assets/module12/FA_Sec1_Img4.png')
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 12 - First Aid',
                    sectionNum: '2',
                    sectionTitle: 'Make or buy first aid kits for your home and car',
                    image: require('../assets/module12/FA_Sec2_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: "Buy first aid kits for your home or car",
                    info: 'Buy a ready-made first aid kit',
                    image: require('../assets/module12/FA_Sec2_Img2.png')
                }
            },
            {
                pageType: 'ModuleTextOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: "Contents of a basic first aid kit",
                    info: '- Adhesive tape\n- Gauze Pads & Roller Gauze\n- Antiseptic Ointment\n- Hand Sanitizer\n- Band-Aids\n- Plastic Bags\n- Blanket\n- Scissors and tweezers\n- Cold Pack\n- Small Flashlight and Extra Batteries\n- Disposable Gloves\n- Triangular Bandage',
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 12 - First Aid',
                    sectionNum: '3',
                    sectionTitle: 'take training in first aid, CPR, AED, or pet first aid',
                    image: require('../assets/module12/FA_Sec3_Img1.png'),
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: "Take Classes to learn Emergency Skills",
                    info: 'Contact your local fire department or American Red Cross chapter to learn what first aid classes are available in your area.',
                    image: require('../assets/module12/FA_Sec3_Img2.png')
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: "Take Classes to learn Emergency Skills",
                    info: 'Knowing how to apply a bandage, identify the signs and symptoms of shock, perform CPR or use an automatic external defibrillator (AED) can save a life.',
                    image: require('../assets/module12/FA_Sec3_Img3.png')
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                content: {
                    info: 'You went through all the materials for Module 12, hopefully you learned a bit more about first aid preparedness.',
                    image: require('../assets/module12/Congratulations_Image.png'),
                }
            }
        ]
    },
]

    export default modules;