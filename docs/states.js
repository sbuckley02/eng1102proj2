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
        "question": "Would you rather buy many small items or one item?",
        "answers": [
            {
                "name": "Many Small Items",
                "url": "labor.jpg"
            },
            {
                "name": "One Large Item",
                "url": "labor.jpg"
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "ClothingQ2?",
        "answers": [
            {
                "name": "Ans1",
                "url": "labor.jpg"
            },
            {
                "name": "Ans2",
                "url": "labor.jpg"
            },
            {
                "name": "Ans3",
                "url": "labor.jpg"
            },
            {
                "name": "Ans4",
                "url": "labor.jpg"
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "ClothingQ3?",
        "answers": [
            {
                "name": "Ans1",
                "url": "labor.jpg"
            },
            {
                "name": "Ans2",
                "url": "labor.jpg"
            },
            {
                "name": "Ans3",
                "url": "labor.jpg"
            },
            {
                "name": "Ans4",
                "url": "labor.jpg"
            }
        ],
        "checked": null,
        "btnText": "Next Question"
    },
    {
        "type": "question",
        "question": "ClothingQ4?",
        "answers": [
            {
                "name": "Ans1",
                "url": "labor.jpg"
            },
            {
                "name": "Ans2",
                "url": "labor.jpg"
            },
            {
                "name": "Ans3",
                "url": "labor.jpg"
            },
            {
                "name": "Ans4",
                "url": "labor.jpg"
            }
        ],
        "checked": null,
        "btnText": "Next Question",
        "nextState": 14
    },
    {
        "type": "question",
        "question": "Which place have you always said you wanted to explore, but know deep-down it's not going to happen because you never actually wanted to explore there, you just liked the idea of it?",
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
        "question": "Hypothetically, we revert to the hunter-gatherer days and the only job is to ensure survival. Are you growing a garden or raising animals?",
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
                "name": "Surfing in the summer",
                "url": "Hot.jpg",
                "values": {
                    "seafood": 1,
                    "palm": 1
                }
            },
            {
                "name": "Skiing in the winter",
                "url": "Cold.jpg",
                "values": {
                    "coffee": 1,
                    "palm": 1,
                    "dairy": 1,
                    "chocolate": 1
                }
            }
        ],
        "checked": null,
        "btnText": "Next Question",
        "nextState": 14
    },
    {
        "type": "question",
        "question": "Which place have you always said you wanted to explore, but know deep-down it's not going to happen because you never actually wanted to explore there, you just liked the idea of it?",
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
        "question": "The age-old question: minimalism or maximalism?",
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
        "question": "How often do you clean your room/house? Be honest please.",
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
        "message": "All metaphors and subtle jokes aside, you may be wondering, \"How are goods like these actually unethically produced?\" To get an answer to that question, check out our crash-course style video explaining how unethical labor is seen in many of the products we use on a daily basis!",
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
            }
        ],
        "btnText": "Next"
    }
];