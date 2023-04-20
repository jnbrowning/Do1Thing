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
                    altText: '2 people celebrating with confetti'
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
                    altText: 'woman drinking from a water bottle'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: 'Water Needed Per Day',
                    info: 'To prepare for an emergency, plan to have one gallon (4 liters) per person per day.',
                    image: require('../assets/module2/Water_Sec1_Img2.png'),
                    altText: 'infographic, image: man holding one gallon of water is pointing to calendar, text: one gallon per person per day'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: 'Total Water Needed',
                    info: 'Determine total water needed by multiplying the number of people by 3 - that is how many gallons you need!',
                    image: require('../assets/module2/Water_Sec1_Img3.png'),
                    altText: 'infographic, image: formula, two people times 3 days on calendar equals six gallons of water, text: number of people times the number of days equals the amount of water needed in gallons'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: "Don't Forget Pets",
                    info: 'Include an extra one gallon (4 liters) for a medium size pet. That one gallon should last three days, but plan for more or less if your pet is very large or very small.',
                    image: require('../assets/module2/Water_Sec1_Img4.png'),
                    altText: 'dog and cat'
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
                    altText: 'water bottle'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: "Purchasing Water",
                    info: 'Option 1: Purchase enough water at the store.\n\nPurchased water should be replaced once a year',
                    image: require('../assets/module2/Water_Sec2_Img2.png'),
                    altText: 'dollar sign'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: "Bottling Your Own",
                    info: 'Option 2: Bottle your own water. Begin by finding water containers. Do NOT use milk jugs.',
                    image: require('../assets/module2/Water_Sec2_Img3.png'),
                    altText: 'infographic, image: man holding 3 empty soda bottles next to image of crossed out milk jug, text: no milk jugs, soda bottles work well.'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: "Bottling Your Own",
                    info: 'Next, be sure to clean the containers before filling them with water.',
                    image: require('../assets/module2/Water_Sec2_Img4.png'),
                    altText: 'infographic, image: bottle with soap, bottle with bleach, bottle with air, text: wash, wash containers with dish soap and rince with water. sanitize, rince with mixture of one teaspoon bleach to one quart of water. air dry, do not towel dry'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: "Bottling Your Own",
                    info: 'Finally, bottle enough water for your household.',
                    image: require('../assets/module2/Water_Sec2_Img5.png'),
                    altText: 'water bottle being filled using funnel'
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
                    altText: 'woman holding large pencil, checking things of large checklist'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: "Store Water in the Freezer",
                    info: 'If possible, store water in the freezer. This will keep the water fresh tasting and your food colder in a power outage!',
                    image: require('../assets/module2/Water_Sec3_Img2.png'),
                    altText: '3 bottles of water in freezer'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 2 - Water',
                    headText: "Drink Enough Water",
                    info: 'If supplies run low, never ration water. Drink the amount you need today and look for more tomorrow.',
                    image: require('../assets/module2/Water_Sec3_Img3.png'),
                    altText: "water bottle"
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
                pageType: 'ModuleChecklist',
                module: 2,
                moduleName: 'Make a Plan',
                content: {
                    mod: 'Module 2 - Make a Plan',
                    headText: '',
                    info: 'Discuss how to prepare and respond to emergencies that are most likely to happen where you live, learn, work, and play.',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 2,
                content: {
                    info: 'You went through all the materials for Module 2, hopefully you learned a bit more about water preparedness.',
                    image: require('../assets/module2/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'woman looking through magnifying glass at houses'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: 'Stay Inside, away from windows and skylights',
                    info: 'Windows can be dangerous in a tornado or high winds.',
                    image: require('../assets/module3/Sheltering_Sec1_Img2.png'),
                    altText: 'infographic, person standing in house near broken window with X and wrong text over it, another person standing in house away from windows with checkmark and right text over it'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: 'Shelter down and in',
                    info: 'Put as many walls between yourself and the outside as you can (think of the ceiling as a wall).',
                    image: require('../assets/module3/Sheltering_Sec1_Img3.png'),
                    altText: 'infographic of people sheltering in the bottom level of the home, in a middle room'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Avoid large rooms",
                    info: 'Avoid rooms with large ceiling expanses. Find an area large enough for everyone to stay comfortably for at least 45 minutes.',
                    image: require('../assets/module3/Sheltering_Sec1_Img4.png'),
                    altText: 'infographic, image of 4 people in too small of a space with x and small text over it indicating room is too small, another image of 4 people standing in a good size room with a checkmark and right text over it'
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
                    altText: 'woman reading book near opened laptop and stack of two books'
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
                    image: require('../assets/module3/Sheltering_Sec2_Img2.png'),
                    altText: 'a man and woman watching news reporter with breaking news on television'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Do the following...",
                    info: 'Close all doors and windows.\n\nShut off fans and air conditioning.\n\nGo to room with the least amount of doors and windows.',
                    image: require('../assets/module3/Sheltering_Sec2_Img3.png'),
                    altText: 'woman showing checkmark on screeen and giving a thumbs up'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Do NOT...",
                    info: 'Do not call 911 to get information about emergency.\n\nDo not leave your home if instructed to “Shelter in place”.',
                    image: require('../assets/module3/Sheltering_Sec2_Img4.png'),
                    altText: 'woman holding a stop sign and holding up her hand in a stop motion, in front of a sign that says do not enter'
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
                    altText: 'girl packing books into backpack'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Shelter is available",
                    info: 'An emergency shelter will have water and food, and a place for you to sleep.',
                    image: require('../assets/module3/Sheltering_Sec3_Img2.png'),
                    altText: 'infographic with disaster update paper, a car, a turkey leg to indicate food, and a bottle of water'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Make a go bag",
                    info: 'Pack things that will not be provided by the shelter, such as pillow and blanket, medication, identification etc.',
                    image: require('../assets/module3/Sheltering_Sec3_Img3.png'),
                    altText: 'infographic with id card, 2 prescription medications, and 2 folded shirts '
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: "Prohibited items",
                    info: 'Keep in mind, weapons or alcohol or pets (except for service animals) are not allowed at the shelter.',
                    image: require('../assets/module3/Sheltering_Sec3_Img4.png'),
                    altText: 'dog, cat, beer bottle, and knife, all with cross out image over the top, indicating that these are banned items'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 3,
                moduleName: 'Sheltering',
                content: {
                    mod: 'Module 3 - Sheltering',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 3,
                content: {
                    info: 'You went through all the materials for Module 3, hopefully you learned a bit more about sheltering.',
                    image: require('../assets/module3/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'a mom and young daughter shopping for supplies near a man shopping for suppplies'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: 'Store food for 3 days',
                    info: 'Have a 3 day supply of non-perishable food for your family.',
                    image: require('../assets/module4/Food_Sec1_Img2.png'),
                    altText: 'infographic, six cans stacked in pyramid, equal sign, three days marked on calendar'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: 'Choose Things that are easy to prepare',
                    info: 'Choose items that don’t need to be cooled, heated, or need a lot of water.',
                    image: require('../assets/module4/Food_Sec1_Img3.png'),
                    altText: 'infographic: image, crossed out flame, crossed out snowflake, crossed out water droplet. text, no heating, no cooling, no water'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Pay attention to shelf life",
                    info: 'Look at the expiration date listed on the food item. Use and replace foods before the expiration date.',
                    image: require('../assets/module4/Food_Sec1_Img4.png'),
                    altText: 'infographic, 3 cans labeled freshe with checkmarks over them, one can labeled old with x over it'
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
                    altText: 'man and woman interacting with giant strawberries, shrimp, and fish'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Install Thermometers",
                    info: 'Install a thermometer in your fridge and freezer so you will know if your food gets too warm.',
                    image: require('../assets/module4/Food_Sec2_Img2.png'),
                    altText: 'infographic, thermometer with arrows pointing to fridge and freezer'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Monitor Temperature",
                    info: 'If the temperature in your fridge stays above 41 degrees Fahrenheit for more than four hours, perishable food items may be unsafe to eat.',
                    image: require('../assets/module4/Food_Sec2_Img3.png'),
                    altText: 'infographic, image: cooked turkey leg next to thermometer with arrow pointing up above 41 degrees, text: food may be unsafe to eat if your fridge temperature rises above 41 degrees fahrenheit for more than four hours'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Reduce refrigerator temperature",
                    info: 'Turn down the temperature in your fridge or freezer if you think your power might go out.',
                    image: require('../assets/module4/Food_Sec2_Img4.png'),
                    altText: 'infographic, crossed out electric sign pointing to temperature being turned to cold'
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
                    altText: 'three doctors standing'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Consider Special Dietary Equipment",
                    info: 'If you use special equipment, like a blender, food scale, or feeding tubes, make sure you take those with you.',
                    image: require('../assets/module4/Food_Sec3_Img2.png'),
                    altText: 'infographic, blender, feeding tube, food scale'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Build a menu for special diets",
                    info: 'Consider non-perishable menu options if you can’t get to a grocery store, or that can be prepared at an emergency shelter.',
                    image: require('../assets/module4/Food_Sec3_Img3.png'),
                    altText: 'infographic, doctor pointing to three cans and a bottle'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 4 - Food',
                    headText: "Build a menu for special diets",
                    info: 'Keep a description of your medical condition and the diet in your emergency kit.',
                    image: require('../assets/module4/Food_Sec3_Img4.png'),
                    altText: 'infographic, paperwork and presecription indicated inside of emergency kit bag'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 4,
                moduleName: 'Food',
                content: {
                    mod: 'Module 4 - Food',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 4,
                content: {
                    info: 'You went through all the materials for Module 4, hopefully you learned a bit more about food preparedness.',
                    image: require('../assets/module4/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'people walking around a city'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: 'Develop an emergency plan',
                    info: 'Talk to administrators at those places about their emergency plans. Ask for help planning for your family’s unique needs.',
                    image: require('../assets/module5/WSC_Sec1_Img2.png'),
                    altText: 'infographic, man speaking to firefighter about fire extinguisher'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: 'Consider everyone in your plan',
                    info: 'Make sure your plan will work for everyone.',
                    image: require('../assets/module5/WSC_Sec1_Img3.png'),
                    altText: 'infographic, man in wheelchair, child, elderly woman'
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
                    altText: 'woman reading a book in an armchair'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Make emergency kits for others",
                    info: 'Put together basic emergency kits for people who may not be able to do so for themselves or for those who may not think of doing it for themselves.',
                    image: require('../assets/module5/WSC_Sec2_Img2.png'),
                    altText: 'infographic, image: emergency kit pointing towards elderly woman and young boy, text: emergency kit, make an emergency kit for those that may not think to make one for themselves'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Include prescriptions",
                    info: 'Make sure the kit meets their specific needs. For instance, if someone takes prescription medicine, include a list of medications and dosages.',
                    image: require('../assets/module5/WSC_Sec2_Img3.png'),
                    altText: 'infographic, glasses in front of paperwork labeled my prescriptions'
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
                    altText: '4 people sitting around having a conversation'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Learn about emergency plans",
                    info: 'Ask about emergency plans at your work, school, or other places your family members spend time.',
                    image: require('../assets/module5/WSC_Sec3_Img2.png'),
                    altText: 'infographic, large office building with emergency bag with checkmark over it, school house with emergency bag with checkmark over it'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 5',
                    headText: "Know where emergency tools are",
                    info: 'Find out where emergency tools like fire extinguishers are kept in the places you spend time.',
                    image: require('../assets/module5/WSC_Sec3_Img3.png'),
                    altText: 'infographic, map showing where AED, fire extinguisher, and tornado shelter are located in a building'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 5,
                moduleName: 'Work, School & Communities',
                content: {
                    mod: 'Module 5 - Work, School & Communities',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 5,
                content: {
                    info: 'You went through all the materials for Module 5, hopefully you have prepared for an emergency at work, in school, or in the community.',
                    image: require('../assets/module5/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    goal: "Be aware of and prepare for your family's unique needs.",
                }
            },
            {
                pageType: 'ModuleSectionHead',
                buttonText: "Let's Go",
                content: {
                    mod: 'Module 6 - Unique Family Needs',
                    sectionNum: '1',
                    sectionTitle: "Talk with family members to identify your household's unique needs",
                    image: require('../assets/module6/WSC_Sec1_Img1.png'),
                    altText: 'baby shoes, baby toy, and baby bottle'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: 'Things that might be special needs',
                    info: '1. Infants and young children\n2. Prescription medication\n3. Health-related supplies\n4. Assistive devices\n5. Pets',
                    image: require('../assets/module6/WSC_Sec1_Img2.png'),
                    altText: "infographic, image: baby, prescriptions, needle for injection, glasses, cane, cat and dog, text: unique situations, pets, medicines, babies, and other disabilities can all make special needs. make sure you're prepared to meet those needs"
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: "Don't overlook small items",
                    info: 'Common items like diapers and pet food might not be easy to find right after a disaster.',
                    image: require('../assets/module6/WSC_Sec1_Img3.png'),
                    altText: "infographic, box of diapers, can of baby formula, bag of cerberus' choice dog food"
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
                    altText: 'cat and dog with heart over them'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: "Make a plan for pets",
                    info: 'Disasters may strike while your pets are home alone.',
                    image: require('../assets/module6/WSC_Sec2_Img2.png'),
                    altText: 'infographic, house with cat and dog inside'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: "Have a neighbor check on your pets",
                    info: 'Ask a neighbor to check on your pets if you can’t get home in a disaster.',
                    image: require('../assets/module6/WSC_Sec2_Img3.png'),
                    altText: 'infographic, man outside waving to cat and dog in house'
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
                    altText: 'woman giving presentation to woman in chair, man in wheelchair, and man standing'
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 6',
                    headText: "Create an evacuation for those with special needs",
                    image: require('../assets/module6/WSC_Sec3_Img2.png'),
                    altText: 'infographic, image: alert icon, red cross icon, bus icon, wheelchair icon text: emergency alerts, make sure you are signed up for emergency alerts in your area, red cross, talk to your local red cross chaper or other organiations to make sure your needs can  be met in a shelter, paratransit, talk to your paratransit provider to find out what services are provided during an evacuation, wheelchair, if you use a wheelchair, make your evacuation route is wheelchair accessible'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 6,
                moduleName: 'Unique Family Needs',
                content: {
                    mod: 'Module 6 - Unique Family Needs',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 6,
                content: {
                    info: 'You went through all the materials for Module 6, hopefully you feel prepared for the unique needs of your family in an emergency.',
                    image: require('../assets/module6/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'two people in a car, driving down the road near a city'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: 'Keep a phone charger in your vehicle',
                    info: 'Charge your phone in your car if your home power goes out.',
                    image: require('../assets/module7/FCP_Sec1_Img2.png'),
                    altText: 'infographic, image: car charger pointing to car, text: charge your phone in your car if your home power goes out'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: 'Know how to text',
                    info: 'A text message from your cell phone may get through when a phone call doesn’t. Make sure everyone in your family knows how to send and receive text messages.',
                    image: require('../assets/module7/FCP_Sec1_Img3.png'),
                    altText: "infographic: image: text message being received on phone, text: text message, OMG! I am safe! smiley face, in an emergency a text may go through when a call doesn't. Make sure your family knows how to text"
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
                    altText: 'Woman sitting on bean bag on the phone with her friend Charlie'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "Make a communication Plan",
                    info: 'Develop a plan so you can stay in touch with your family in a disaster.',
                    image: require('../assets/module7/FCP_Sec2_Img2.png'),
                    altText: 'infographic, 7 people linked by phones for communication'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "Have a long distance contact",
                    info: 'Choose someone outside of the local calling area to be your “outside the area” contact. Make sure all family members carry this phone number with them.',
                    image: require('../assets/module7/FCP_Sec2_Img3.png'),
                    altText: 'infographic, two phones with x between them labeled local calls, two phones further apart with checkmark, labeled long distance calls'
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
                    altText: 'concerned woman on the phone with 911 emergency call'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "Add Emergency contact to your address book",
                    info: 'If you have a cell phone, you can provide the phone numbers for your emergency contacts to first responders and hospital staff.',
                    image: require('../assets/module7/FCP_Sec3_Img2.png'),
                    altText: 'infographic, cell phone with ICE, in case of emergency'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: "First responders will call ICE",
                    info: 'If you are hurt and can’t talk, first responders and hospital staff will now know how to contact your family right away.',
                    image: require('../assets/module7/FCP_Sec3_Img3.png'),
                    altText: 'infographic, emergency provider doing CPR on unconscious person and calling ICE number '
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 7,
                moduleName: 'Family Communication Plan',
                content: {
                    mod: 'Module 7 - Family Communication Plan',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 7,
                content: {
                    info: 'You went through all the materials for Module 7, hopefully your family has an established communication plan.',
                    image: require('../assets/module7/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'man and woman shaking hands'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: 'Isolated individuals are more vulnerable',
                    info: 'Isolated individuals are more vulnerable during and after a disaster. They are less likely to ask for help or follow emergency instructions.',
                    image: require('../assets/module8/Involved_Sec1_Img2.png'),
                    altText: 'man in house looking out window towards two other homes'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: 'Take time to meet them in your neighborhood',
                    info: 'Take time to meet them. Help them make a plan for emergencies, and include checking on them in your plan.',
                    image: require('../assets/module8/Involved_Sec1_Img3.png'),
                    altText: 'young mang giving basket of fruit to older man with cane'
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
                    altText: 'man on laptop and woman making announcement in front of phone displaying social media icons'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "MPost preparedness information",
                    info: 'Include a Do1Thing preparedness topic in newsletters or on bulletin boards each month.',
                    image: require('../assets/module8/Involved_Sec2_Img2.png'),
                    altText: 'bulletin board with get involved flyer and otehr unlabeled flyers hanging on it'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Make emergency kits for seniors and children",
                    info: 'Get a group together to make emergency kits for seniors or kids who stay home alone.',
                    image: require('../assets/module8/Involved_Sec2_Img3.png'),
                    altText: 'young boy with kit, elderly man, and elderly woman'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Learn how others are promoting preparedness",
                    info: 'Find the materials that will work best for your organization and become a partner in preparing your community!',
                    image: require('../assets/module8/Involved_Sec2_Img4.png'),
                    altText: 'computer desktop showing do one thing dot com website'
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
                    altText: 'young man carrying grocery bag and helping elderly woman with cane'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Sign up to volunteer",
                    info: 'If you are interested in helping in your community or other communities during a disaster, become a volunteer for your local Red Cross or Salvation Army chapter.',
                    image: require('../assets/module8/Involved_Sec3_Img2.png'),
                    altText: 'fire fighter badge, red cros icon, C.E.R.T. volunteer hat'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: "Volunteer now",
                    info: 'Don’t wait for disaster to strike—volunteer now. These organizations won’t send untrained volunteers into disaster areas.',
                    image: require('../assets/module8/Involved_Sec3_Img3.png'),
                    altText: "infographic, image: man with no training marked with x labeled cannot help after a disaster, man in uniform trained for disaster marked with checkmark and labeled ready to help after a disaster, text: don't wait, organizations will not send untrained volunteers to help after a disaster. If you want help in an emergency, volunteer now."
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 8,
                moduleName: 'Involved',
                content: {
                    mod: 'Module 8 - Involved',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 8,
                content: {
                    info: 'You went through all the materials for Module 8, hopefully you learned a bit more about being informed.',
                    image: require('../assets/module8/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'man concerned by warning, attention please sign'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: 'Warning Sirens',
                    info: 'Call your local fire department to find out if your area is covered by warning sires, when they are tested, and when they would be activated.',
                    image: require('../assets/module9/Informed_Sec1_Img2.png'),
                    altText: 'infographic, image: man standing outside hearing siren, then going inside of house, text: siren, go inside if you hear the outdoor warning siren'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: 'Other ways to get the message',
                    info: 'Some communities have other ways of warning residents. Call your police or fire department to find out how emergency warning messages will be sent. ',
                    image: require('../assets/module9/Informed_Sec1_Img3.png'),
                    altText: 'infographic, man on phone, man sending email, man sending text'
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
                    altText: 'woman speaking on radio show'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Weather can change quickly",
                    info: 'Severe weather may strike when people are sleeping or unaware of the forecast. This can be deadly if people do not seek a safe shelter',
                    image: require('../assets/module9/Informed_Sec2_Img2.png'),
                    altText: 'infographic, severe weather alert pointing towards person sleeping in their home'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Get a weather radio",
                    info: 'A weather radio will wake you up in an emergency warning is issued.\n\nThey can be purchased at stores that sell electronics. Prices start at about $20.00',
                    image: require('../assets/module9/Informed_Sec2_Img3.png'),
                    altText: 'radio going off and waking up sleeping man'
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
                    altText: "two people communicating with each other"
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Make sure everyone in your household can communicate in a disaster",
                    image: require('../assets/module9/Informed_Sec3_Img2.png'),
                    altText: "infographic, image: man speaking, closed caption icon, alert icon with question mark, text: spoken word, there may be words or pictures on the tv screen that aren't said out loud. if you are blind or have low vision it might be hard to understand. close captioning, there might not be close captioning, words on the tv screen might be hard to read or might move too fast, clear alerts, messages might come from a computer or over a loud speaker. They might be hard to understand if you are hard of hearing or if you don't speak English well"
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: "Have someone to help with communication",
                    info: 'If you think you may not be able to understand emergency information, identify someone (or more than one person) that you can contact for help in an emergency.',
                    image: require('../assets/module9/Informed_Sec3_Img3.png'),
                    altText: 'one person hearing alert and telling their friend what is being said'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 9,
                moduleName: 'Involved',
                content: {
                    mod: 'Module 9 - Informed',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 9,
                content: {
                    info: 'You went through all the materials for Module 9, make sure everyone can receive, understand, and act on emergency information.',
                    image: require('../assets/module9/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'man shining flashlight'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: 'Use battery operated flashlights',
                    info: 'When lights go out, the safest way to provide emergency lighting is with flashlights or battery-powered lanterns.',
                    image: require('../assets/module10/Power_Sec1_Img2.png'),
                    altText: 'infographic, image: flashlight, large flashlight, lantern, and battery, text: battery powered, use flashlights and battery powered lanterns. They are safer than candles. Keep flashlights in several places in your house. Be sure to check the batteries.'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: 'Store Extra Batteries',
                    info: 'Always keep a supply of extra batteries. Think about buying a rechargeable flashlight. Batteries might be hard to find in a disaster.',
                    image: require('../assets/module10/Power_Sec1_Img3.png'),
                    altText: 'collection of different sizes of batteries'
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
                    altText: 'man with tool belt admiring light bulb'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Talk to an electrician",
                    info: 'Talk to an electrician about what kind of generator will work for your home.',
                    image: require('../assets/module10/Power_Sec2_Img2.png'),
                    altText: 'infographic, electrician approving generator'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Learn how to use a generator",
                    info: 'Learn how to use a generator to make electricity for your home when the power goes out.\n\nNever operate a generator inside your house.',
                    image: require('../assets/module10/Power_Sec2_Img3.png'),
                    altText: 'generator'
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
                    altText: 'man looking at breaker box in house with lantern'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Have at least one phone with a cord",
                    info: 'Home phones (not cell phones) that have cordless handsets won’t work when the power goes out.',
                    image: require('../assets/module10/Power_Sec3_Img3.png'),
                    altText: 'corded phone'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Always keep your gas tank at least half full",
                    info: 'Gas stations might be closed in a disaster. Make sure your car always has gas.',
                    image: require('../assets/module10/Power_Sec3_Img3.png'),
                    altText: 'infographic, car with half full gas tank'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 10 - Power',
                    headText: "Have a car charger for your cell phone",
                    info: 'You will still be able to charge your cell phone in your car if the power goes out.',
                    image: require('../assets/module10/Power_Sec3_Img4.png'),
                    altText: 'car charger for phone'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 10,
                moduleName: 'Power',
                content: {
                    mod: 'Module 10 - Power',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 10,
                content: {
                    info: 'You went through all the materials for Module 10, hopefully you learned a bit more about preparing for an electrical outage.',
                    image: require('../assets/module10/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'father with two daughters getting supplies'
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: 'Have a go bag ready',
                    image: require('../assets/module11/ES_Sec1_Img2.png'),
                    altText: 'infographic, image: first aid kit, flashlight, batteries, whistle, folded clothes, text: emergency items, radio, first aid kit, flashlight, batteries, whistle. personal items, change of clothes, toiletries, playing cards, magazines'
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
                    image: require('../assets/module11/ES_Sec1_Img3.png'),
                    altText: 'infographic: image: bag, text: go bag, have ready if you need to evacuate your home or shelter in place. This bag should be easy to get to and carry.'
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
                    altText: 'man with shoulder bag and checkmark of approval'
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a go bag for your car",
                    image: require('../assets/module11/ES_Sec2_Img2.png'),
                    altText: 'infographic: image: car, text: small first aid kit, flashlight, cell phone charger, flares, blanket, bottled water, non-perishable food'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a Supply kit for your Pet",
                    info: 'Disaster can strike when you are away from home, if you travel with your pet regularly, make sure that you have an emergency kit for them as well.',
                    image: require('../assets/module11/ES_Sec2_Img3.png'),
                    altText: 'infographic: image: cat with bag, text: once you have a primary go bag, make a bag for any pets containing special food or medication'
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a go bag for your school",
                    image: require('../assets/module11/ES_Sec2_Img4.png'),
                    altText: 'infographic: image: school building, text: building emergency procedures, building maps showing evacuation and shelter areas, pens or pencils, signs with the words need help and all clear, clipboard with class names'
                }
            },
            {
                pageType: 'ModuleImageOnly',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Make a go bag for your office",
                    image: require('../assets/module11/ES_Sec2_Img5.png'),
                    altText: 'infographic: image: office building, text: building emergency procedures, building maps showing evacuation and shelter areas, pens or pencils, signs with the words need help and all clear, clipboard with staff names'
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
                    altText: 'man with stack of money'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "ATM Machines may not work",
                    info: 'Many things that we take for granted are not available when there is no power. ATM machines may not work.',
                    image: require('../assets/module11/ES_Sec3_Img3.png'),
                    altText: 'infographic: image: atm without power next to credit card, text: ATMs and other machines may not work if the power goes out'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Stash some cash",
                    info: 'Some experts say you should have at minimum $150.00 in cash stashed away. Realizing this may not be possible for everyone, any amount is good to start with.',
                    image: require('../assets/module11/ES_Sec3_Img3.png'),
                    altText: 'infographic: image: stack of cash, text: at least $150 is the recommended minimum amount of cash to have in case of an emergency'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: "Build your stash weekly, if necessary",
                    info: 'Take $1.00 a week and place it in an envelope in your emergency kit. In just a little time, you will have some cash stashed away for us in emergencies.',
                    image: require('../assets/module11/ES_Sec3_Img4.png'),
                    altText: 'infographic: image: envelope of cash, text: save $1 per week, put it in an envelope in your go bag'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 11,
                moduleName: 'Emergency Supplies',
                content: {
                    mod: 'Module 11 - Emergency Supplies',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 11,
                content: {
                    info: 'You went through all the materials for Module 11, hopefully you have prepared an emergency supplies kit and a go bag.',
                    image: require('../assets/module11/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
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
                    altText: 'ambulance driving down road'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: 'Call 911',
                    info: '- Stay on the line with 911 and follow Emergency Instructions\n\n- Stay calm and try to keep the patient calm',
                    image: require('../assets/module12/FA_Sec1_Img2.png'),
                    altText: 'infographic: image: corded phone and two cell phones, text: call 911, do not try to take an injured person to the hospital yourself'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: 'DO NOT do these while help is on the way',
                    info: "- Don’t move a patient who was injured in an automobile accident or fall, or who was found unconscious.\n\n- Don’t give an injured person anything to eat or drink (Unless instructed by the 911 dispatcher)",
                    image: require('../assets/module12/FA_Sec1_Img3.png'),
                    altText: "infographic: text: do not hang up on the 911 operator, don't move someone that was injured in an auto accident, fall, or found unconscious, don't give food or drink unless instructed to, don't panic, try to keep yourself and the injured person calm"
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: 'DO these while help is on the way',
                    info: "- If the patient is cold, cover them with a blanket\n\n- Have someone watch for the ambulance and show the crew how to get to the patient. (Especially important in apartment or office buildings, or if your address is hard to see from the street).",
                    image: require('../assets/module12/FA_Sec1_Img4.png'),
                    altText: 'infographic: text: do cover patient with blanket if cold, have someone watch for the ambulance so they can direct the crew to the patient'
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
                    altText: 'woman with first aid kit putting bandage on young boy with scraped knee'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: "Buy first aid kits for your home or car",
                    info: 'Buy a ready-made first aid kit',
                    image: require('../assets/module12/FA_Sec2_Img2.png'),
                    altText: 'infographic: image: two first aid kits with buy label and dollar sign, text: ready-made first aid kits are available at most department stores or your local american red cross chapter. they come in a variety of sizes and prices'
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
                    altText: 'man earning certification online'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: "Take Classes to learn Emergency Skills",
                    info: 'Contact your local fire department or American Red Cross chapter to learn what first aid classes are available in your area.',
                    image: require('../assets/module12/FA_Sec3_Img2.png'),
                    altText: 'infographic: image: phone, american red cross logo, fire department logo, text: contact your local fire department or red cross chapter to find courses available in your area'
                }
            },
            {
                pageType: 'ModuleContent',
                buttonText: 'Next',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: "Take Classes to learn Emergency Skills",
                    info: 'Knowing how to apply a bandage, identify the signs and symptoms of shock, perform CPR or use an automatic external defibrillator (AED) can save a life.',
                    image: require('../assets/module12/FA_Sec3_Img3.png'),
                    altText: 'infographic: man in bandages labeled applying bandages, man doing CPR labeled performing CPR, man raising finger knowingly labeled identifying symptoms of shock, AED logo labeled using an AED'
                }
            },
            {
                pageType: 'ModuleChecklist',
                module: 12,
                moduleName: 'First Aid',
                content: {
                    mod: 'Module 12 - First Aid',
                    headText: '',
                    info: '',
                }
            },
            {
                pageType: 'ModuleCongrats',
                buttonText: 'Done',
                module: 12,
                content: {
                    info: 'You went through all the materials for Module 12, hopefully you learned a bit more about first aid preparedness.',
                    image: require('../assets/module12/Congratulations_Image.png'),
                    altText: '2 people celebrating with confetti'
                }
            }
        ]
    },
]

    export default modules;