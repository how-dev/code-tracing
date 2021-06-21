import { sequenceBooleanResponse, sequenceNumberResponse } from "./auxFuncs";
import { Column, Title } from "./auxClasses";

export const exerciseOne = [
    new Column("i", sequenceNumberResponse(0, 5)),
    new Column(
        "console",
        [
            {
                response: 0
            },
            {
                response: 1
            },
            {
                response: 2
            },
            {
                response: 3
            },
            {
                response: 4
            },
            {
                response: "-"
            },
        ]
    ),
    new Column("i < 5", sequenceBooleanResponse(6)),
]
export const exerciseOneTitle = new Title (
    "for (let i = 0; i < 5; i++) {\n" +
    "    console.log(i)\n" +
    "}",
    1,
    10,
    2
)

export const exerciseTwo = [
    new Column("i", sequenceNumberResponse(5, 0, 1, true)),
    new Column(
        "console",
        [
            {
                response: 5
            },
            {
                response: 4
            },
            {
                response: 3
            },
            {
                response: 2
            },
            {
                response: 1
            },
            {
                response: "-"
            },
        ]
    ),
    new Column("i > 0", sequenceBooleanResponse(6))
]
export const exerciseTwoTitle = new Title (
    "for (let i = 5; i > 0; i--) {\n" +
    "    console.log(i)\n" +
    "}",
    2,
    1,
    3
)

export const exerciseThree = [
    new Column("counter", sequenceNumberResponse(2, 12, 2)),
    new Column ("counter <= 10",sequenceBooleanResponse(6)),
    new Column ("output",
        [
            {
                response: 2
            },
            {
                response: 6
            },
            {
                response: 12
            },
            {
                response: 20
            },
            {
                response: 30
            },
            {
                response: 30
            },
        ]
    )
]
export const exerciseThreeTitle = new Title (
    "let output = 0\n" +
    "for (let counter = 2; counter <= 10; counter += 2) {\n" +
    "    output += counter\n" +
    "}\n" +
    "console.log(output)"
    ,
    3,
    2,
    4
)

export const exerciseFour = [
    new Column("index", sequenceNumberResponse(60, 15, 7, true)),
    new Column("index > 19 ", sequenceBooleanResponse(7)),
    new Column(
        "response",
        [
            {
                response: 60
            },
            {
                response: 113
            },
            {
                response: 159
            },
            {
                response: 198
            },
            {
                response: 230
            },
            {
                response: 255
            },
            {
                response: 255
            },
        ]
    )
]
export const exerciseFourTitle = new Title (
    "let response = 0\n" +
    "for (let index = 60; index > 19; index -= 7) {\n" +
    "    response += index\n" +
    "}\n" +
    "console.log(response)",
    4,
    3,
    5
)

export const exerciseFive = [
    new Column("churros", sequenceNumberResponse(1, 7)),
    new Column(
        "churros % 2 === 0",
        [
            {
                response: false
            },
            {
                response: true
            },
            {
                response: false
            },
            {
                response: true
            },
            {
                response: false
            },
            {
                response: true
            },
            {
                response: "-"
            },
        ]
    ),
    new Column(
        "console",
        [
            {
                response: "-"
            },
            {
                response: 2
            },
            {
                response: "-"
            },
            {
                response: 4
            },
            {
                response: "-"
            },
            {
                response: 6
            },
            {
                response: "-"
            },
        ]
    ),
    new Column("churros < 7", sequenceBooleanResponse(7))
]
export const exerciseFiveTitle = new Title (
    "for (let churros = 1; churros < 7; churros++) {\n" +
    "    if (churros % 2 === 0) {\n" +
    "        console.log(churros)\n" +
    "    }\n" +
    "}\n" ,
    5,
    4,
    6
)

export const exerciseSix = [
    new Column ("i", sequenceNumberResponse(0, 8)),
    new Column("i < 8", sequenceBooleanResponse(9)),
    new Column(
        "i % 2 === 0",
        [
            {
                response: true
            },
            {
                response: false
            },
            {
                response: true
            },
            {
                response: false
            },
            {
                response: true
            },
            {
                response: false
            },
            {
                response: true
            },
            {
                response: false
            },
            {
                response: "-"
            },
        ]
    ),
    new Column(
        "output",
        [
            {
                response: 2
            },
            {
                response: 3
            },
            {
                response: 5
            },
            {
                response: 6
            },
            {
                response: 8
            },
            {
                response: 9
            },
            {
                response: 11
            },
            {
                response: 12
            },
            {
                response: 12
            },
        ]
    )
]
export const exerciseSixTitle = new Title (
    "let output = 0\n" +
    "for (let i = 0; i < 8; i++) {\n" +
    "    if (i % 2 === 0) {\n" +
    "        output += 2\n" +
    "    } else {\n" +
    "        output += 1\n" +
    "    }\n" +
    "}\n" +
    "console.log(output)",
    6,
    5,
    7
)

export const exerciseSeven = [
    new Column("i", sequenceNumberResponse(0, 4)),
    new Column("i <= arr.length", sequenceBooleanResponse(5)),
    new Column(
        "arr[i]",
        [
            {
                response: 10
            },
            {
                response: 5
            },
            {
                response: -98311
            },
            {
                response: "undefined"
            },
            {
                response: "undefined"
            },
        ]
    ),
    new Column(
        "number",
        [
            {
                response: 10
            },
            {
                response: 5
            },
            {
                response: -98311
            },
            {
                response: "undefined"
            },
            {
                response: "undefined"
            },
        ]
    ),
    new Column(
        "output",
        [
            {
                response: 10
            },
            {
                response: 15
            },
            {
                response: -98296
            },
            {
                response: "NaN"
            },
            {
                response: "NaN"
            }
        ]
    )
]

export const exerciseSevenTitle = new Title (
    "let output = 0\n" +
    "let arr = [10, 5, -98311]\n" +
    "for (let i = 0; i <= arr.length; i++) {\n" +
    "    let number = arr[i]\n" +
    "    output += number\n" +
    "}\n" +
    "console.log(output)",
    7,
    6,
    8
)

export const exerciseEight = [
    new Column("i", sequenceNumberResponse(0, 3)),
    new Column("i < arr.length", sequenceBooleanResponse(4)),
    new Column(
        "arr[i]",
        [
            {
                response: 10
            },
            {
                response: 5
            },
            {
                response: 0
            },
            {
                response: "undefined"
            }
        ]
    ),
    new Column(
        "number",
        [
            {
                response: 10
            },
            {
                response: 5
            },
            {
                response: 0
            },
            {
                response: "-"
            }
        ]
    ),
    new Column(
        "output",
        [
            {
                response: 13
            },
            {
                response: 104
            },
            {
                response: 312
            },
            {
                response: 312
            }
        ]
    )
]
export const exerciseEightTitle = new Title(
    "let output = 1\n" +
    "let arr = [10, 5, 0]\n" +
    "for (let i = 0; i < arr.length; i++) {\n" +
    "    let number = arr[i]\n" +
    "    output *= number + 3\n" +
    "}\n" +
    "console.log(output)",
    8,
    7,
    9
)

export const exerciseNine = [
    new Column("batata", sequenceNumberResponse(0, 3)),
    new Column("batata < arr.length", sequenceBooleanResponse(4)),
    new Column(
        "arr[batata]",
        [
            {
                response: -5
            },
            {
                response: -5
            },
            {
                response: -5
            },
            {
                response: "undefined"
            }
        ]
    ),
    new Column(
        "number",
        [
            {
                response: 0
            },
            {
                response: 0
            },
            {
                response: 0
            },
            {
                response: "undefined"
            },
        ]
    ),
    new Column(
        "cenoura",
        [
            {
                response: 100
            },
            {
                response: 10
            },
            {
                response: 1
            },
            {
                response: 1
            }
        ]
    )
]
export const exerciseNineTitle = new Title(
    "let cenoura = 1000\n" +
    "let arr = [-5, -5, -5]\n" +
    "for (let batata = 0; batata < arr.length; batata++) {\n" +
    "    let number = arr[batata] + 5\n" +
    "    cenoura /= number + 10\n" +
    "}\n" +
    "console.log(cenoura)",
    9,
    8,
    10
)

export const exerciseTeen = [
    new Column("i", sequenceNumberResponse(0, 3)),
    new Column("i < arrA.length", sequenceBooleanResponse(4)),
    new Column(
        "arrA[i]",
        [
            {
                response: 11
            },
            {
                response: 22
            },
            {
                response: 33
            },
            {
                response: "undefined"
            },
        ]
    ),
    new Column(
        "A",
        [
            {
                response: 11
            },
            {
                response: 22
            },
            {
                response: 33
            },
            {
                response: "undefined"
            },
        ]
    ),
    new Column(
        "arrB[i]",
        [
            {
                response: 33
            },
            {
                response: 22
            },
            {
                response: 10
            },
            {
                response: "undefined"
            },
        ]
    ),
    new Column(
        "B",
        [
            {
                response: 33
            },
            {
                response: 22
            },
            {
                response: 10
            },
            {
                response: "undefined"
            },
        ]
    ),
    new Column(
        "A + B % 2 === 1",
        [
            {
                response: false
            },
            {
                response: false
            },
            {
                response: false
            },
            {
                response: "-"
            }
        ]
    ),
    new Column(
        "output",
        [
            {
                response: -132
            },
            {
                response: 5764
            },
            {
                response: -247895
            },
            {
                response: -247895
            },
        ]
    )
]
export const exerciseTeenTitle = new Title(
    "let output = 2\n" +
    "let arrA = [11, 22, 33]\n" +
    "let arrB = [33, 22, 10]\n" +
    "for (let i = 0; i < arrA.length; i++) {\n" +
    "    let A = arrA[i]\n" +
    "    let B = arrB[i]\n" +
    "    if (A + B % 2 === 1) {\n" +
    "        output--\n" +
    "        output *= A - B\n" +
    "    } else {\n" +
    "        output++\n" +
    "        output *= A + B\n" +
    "    }\n" +
    "    output *= -1\n" +
    "}\n" +
    "console.log(output)",
    10,
    9,
    1
)
