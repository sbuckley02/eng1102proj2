let states = [
    {
        "type": "intro",
        "message": "If you've taken BuzzFeed quizzes before, you may know what Hogwarts house you belong to or what kind of Pop-Tart you are. Now, get ready for the real question: what unethically-produced product are you? Are you a tasty chocolate bar? Are you a stylish garment? Which innocent, hard-working people will you exploit? There's only one way to find out!",
        "btnText": "Take Quiz"
    },
    {
        "type": "question",
        "question": "In which category lies your true passions?",
        "answers": [
            {
                "name": "Clothing",
                "url": "clothes.jpg"
            },
            {
                "name": "Food",
                "url": "food.jpg"
            },
            {
                "name": "Household Items",
                "url": "items.jpg"
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "Which place would you explore in your dreams (but not in reality because you don't have that kind of motivation)?",
        "answers": [
            {
                "name": "The Caribbeans",
                "url": "Caribbeans.jpg",
                "values": {
                    "hm": 1,
                    "zara": 2
                }
            },
            {
                "name": "South Korea",
                "url": "Korea.jpg",
                "values": {
                    "uniqlo": 4
                }
            },
            {
                "name": "Bangladesh",
                "url": "Bangladesh.jpg",
                "values": {
                    "hm": 2,
                    "zara": 2,
                    "lulu": 3
                }
            },
            {
                "name": "China",
                "url": "China.jpg",
                "values": {
                    "shein": 3,
                    "gap": 1,
                    "lulu": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "Pick a wallpaper that adequately describes your life.",
        "answers": [
            {
                "name": "",
                "url": "simple.png",
                "values": {
                    "hm": 1,
                    "gap": 1,
                    "lulu": 1,
                    "uniqlo": 1
                }
            },
            {
                "name": "",
                "url": "patternBackground.jpg",
                "values": {
                    "shein": 1,
                    "zara": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "Which is more your vibe: luxury or comfort?",
        "answers": [
            {
                "name": "Luxury",
                "url": "Luxury.jpg",
                "values": {
                    "shein": 1,
                    "zara": 1,
                    "lulu": 1
                }
            },
            {
                "name": "Comfort",
                "url": "Comfort.jpg",
                "values": {
                    "hm": 1,
                    "gap": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "You're hanging out with some friends. Some people decide to go outside and play a pickup basketball game. Everyone else stays inside and watches the Atlanta Hawks, an NBA team, play. What are you doing?",
        "answers": [
            {
                "name": "Playing Basketball",
                "url": "playing.jpg",
                "values": {
                    "gap": 1,
                    "lulu": 1,
                    "uniqlo": 1
                }
            },
            {
                "name": "Watching Basketball",
                "url": "watching.jpg",
                "values": {
                    "shein": 1,
                    "hm": 1,
                    "zara": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question",
        "nextState": 14
    },
    {
        "type": "question",
        "question": "Which place would you explore in your dreams (but not in reality because you don't have that kind of motivation)?",
        "answers": [
            {
                "name": "Peru",
                "url": "Peru.jpg",
                "values": {
                    "seafood": 1,
                    "coffee": 2,
                    "dairy": 1,
                    "chocolate": 1
                }
            },
            {
                "name": "Turkey",
                "url": "Turkey.jpg",
                "values": {
                    "dairy": 1
                }
            },
            {
                "name": "Philippines",
                "url": "Philippines.jpg",
                "values": {
                    "seafood": 1,
                    "palm": 3,
                    "pork": 2
                }
            },
            {
                "name": "United States",
                "url": "USA.jpg",
                "values": {
                    "pork": 2,
                    "dairy": 1
                }
            },
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "Hypothetically, society reverts to a hunter-gatherer food system. Are you growing a garden or raising animals?",
        "answers": [
            {
                "name": "Grow a Garden",
                "url": "Vegetable.jpg",
                "values": {
                    "coffee": 2,
                    "palm": 2,
                    "chocolate": 2
                }
            },
            {
                "name": "Raise Animals",
                "url": "Animals.jpg",
                "values": {
                    "seafood": 2,
                    "pork": 2,
                    "dairy": 2
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "What are you craving: sweet foods or savory foods?",
        "answers": [
            {
                "name": "Sweet",
                "url": "Sweet.jpg",
                "values": {
                    "coffee": 2,
                    "palm": 2,
                    "dairy": 2,
                    "chocolate": 3
                }
            },
            {
                "name": "Savory",
                "url": "Savory.jpg",
                "values": {
                    "seafood": 2,
                    "pork": 2,
                    "dairy": 2
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "Which would you prefer: skiing in the winter or surfing in the summer?",
        "answers": [
            {
                "name": "Skiing in the winter",
                "url": "winter.jpg",
                "values": {
                    "coffee": 1,
                    "palm": 1,
                    "dairy": 1,
                    "chocolate": 1
                }
            },
            {
                "name": "Surfing in the summer",
                "url": "summer.jpg",
                "values": {
                    "seafood": 1,
                    "palm": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question",
        "nextState": 14
    },
    {
        "type": "question",
        "question": "Which place would you explore in your dreams (but not in reality because you don't have that kind of motivation)?",
        "answers": [
            {
                "name": "India",
                "url": "India.jpg",
                "values": {
                    "footwear": 1,
                    "carpet": 1
                }
            },
            {
                "name": "Vietnam",
                "url": "Vietnam.jpg",
                "values": {
                    "footwear": 1,
                    "carpet": 1,
                    "salt": 1,
                    "glove": 1
                }
            },
            {
                "name": "Bangladesh",
                "url": "Bangladesh.jpg",
                "values": {
                    "toy": 1
                }
            },
            {
                "name": "China",
                "url": "China.jpg",
                "values": {
                    "footwear": 1,
                    "glove": 1,
                    "toy": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "Which is more your vibe: luxury or comfort?",
        "answers": [
            {
                "name": "Luxury",
                "url": "Luxury.jpg",
                "values": {
                    "carpet": 1,
                    "salt": 1,
                    "toy": 1
                }
            },
            {
                "name": "Comfort",
                "url": "Comfort.jpg",
                "values": {
                    "footwear": 1,
                    "glove": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "Minimalism or maximalism?",
        "answers": [
            {
                "name": "Minimalism",
                "url": "No.jpg",
                "values": {
                    "footwear": 1,
                    "salt": 1,
                    "toy": 1
                }
            },
            {
                "name": "Maximalism",
                "url": "Yes.jpg",
                "values": {
                    "carpet": 1,
                    "glove": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "How often do you clean your room/house? Be honest.",
        "answers": [
            {
                "name": "Everyday",
                "url": "Everyday.jpg",
                "values": {
                    "glove": 1
                }
            },
            {
                "name": "Occasionally",
                "url": "Occasionally.jpg",
                "values": {
                    "footwear": 1,
                    "carpet": 1
                }
            },
            {
                "name": "Never",
                "url": "Never.jpg",
                "values": {
                    "salt": 1,
                    "toy": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "results",
        "message": "Now that you know a little bit about unethically-produced goods and how to avoid them, check out our introductory video on the topic by clicking the button below!",
        "btnText": "Go to Video"
    },
    {
        "type": "video",
        "message1": "Watch the video below!",
        "message2": "Once you've watched the video, check out the next page to see some links and resources to help you learn more about this topic and to identify/avoid brands that unethically exploit cheap labor.",
        "url": "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
        "btnText": "Learn More"
    },
    {
        "type": "links",
        "message": "Here are some links and resources you can use to identify and avoid unethically-produced products, as well as fighting against unethical labor.",
        "links": [
            {
                "title": "List of Goods Produced by Child Labor or Forced Labor",
                "link": "https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods",
                "description": "This list, made by the U.S. Department of Labor, contains a list of goods produced by either child labor or some form of forced, unethical labor. For each of these goods, it gives information on where and how the goods are unethically produced."
            },
            {
                "title": "Fair Trade Certified Products",
                "link": "https://www.fairtradecertified.org/products?gclid=CjwKCAjwjuqDBhAGEiwAdX2cj22OdXAEAG3R7GlSocSJgvatchljH-xgVDnOYAgSfxNDPMZtPMzz8BoCaYkQAvD_BwE",
                "description": "In this link, you can find products that are fair trade certified and are good alternatives to ones produced with cheap labor."
            },
            {
                "title": "B Corp Certfication Products",
                "link": "https://bcorporation.net/directory",
                "description": "In this link, you can find products that are B Corp certified. You can search through industries and countries."
            },
            {
                "title": "List of Sustainable Fashion Brands",
                "link": "https://www.thegoodtrade.com/features/fair-trade-clothing",
                "description": "This list includes 35 ethical and sustainable fashion brands that can be purchased from as alternatives to unethical fast fashion brands."
            },
            {
                "title": "Goodweave",
                "link": "https://goodweave.org",
                "description": "Goodweave is a non-profit organization that is dedicated to ending child labor, particularly in the rug/carpet industry. A donation to them is a donation to help end child labor."
            }
        ],
        "btnText": "Next"
    }
];