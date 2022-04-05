
//https://opentdb.com/api.php?amount=6&category=21&difficulty=easy&type=multiple

let mySport = [
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country will host the 2020 Summer Olympics?",
        "correct_answer": "Japan",
        "incorrect_answers": [
            "China",
            "Australia",
            "Germany"
        ],
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the 2015 Formula 1 World Championship?",
        "correct_answer": "Lewis Hamilton",
        "incorrect_answers": [
            "Nico Rosberg",
            "Sebastian Vettel",
            "Jenson Button"
        ],
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which team won 2014 FIFA World Cup in Brazil?",
        "correct_answer": "Germany",
        "incorrect_answers": [
            "Argentina",
            "Brazil",
            "Netherlands"
        ],
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What team did England beat to win in the 1966 World Cup final?",
        "correct_answer": "West Germany",
        "incorrect_answers": [
            "Soviet Union",
            "Portugal",
            "Brazil"
        ],
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
        "correct_answer": "Leicester City",
        "incorrect_answers": [
            "Tottenham Hotspur",
            "Watford",
            "Stoke City"
        ],
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Stadium of Light is the home stadium for which soccer team?",
        "correct_answer": "Sunderland FC",
        "incorrect_answers": [
            "Barcelona FC",
            "Paris Saints-Germain",
            "Manchester United"],
    },
];

let sportList = document.getElementById("list");
for (var i = 0; i < mySport.length; i++) {
sportList.innerHTML += "<li>" + "question:" + mySport[i].question + " " + "ready set go!" + " " + " " + "and the answer is:" + " " + mySport[i].correct_answer + "</li>";
}


