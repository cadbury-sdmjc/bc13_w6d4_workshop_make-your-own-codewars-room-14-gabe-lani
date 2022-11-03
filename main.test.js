import { expect, test } from "@jest/globals";
import { squatLeaders } from "./main.js"

//👉 Write your tests below here:
export const coaches = [
    {
        name: "Liz",
        score: "50"
    },
    {
        name: "Loz",
        score: "20"
    },
    {
        name: "Jordan",
        score: "100"
    },
    {
        name: "Helena",
        score: "25"
    },
    {
        name: "Chris",
        score: "80"
    },
    {
        name: "Arshi",
        score: "101"
    },
    {
        name: "Charlotte",
        score: "60"
    },
    {
        name: "Kazeem",
        score: "85"
    },
    {
        name: "Hamza",
        score: "75"
    },
    {
        name: "Vicky",
        score: "90"
    }
];


test("Return top three from full array", () => {
    const actual = squatLeaders(coaches);

    const expected = [
        {
            name: "Arshi",
            score: "101"
        },
        {
            name: "Jordan",
            score: "100"
        },
        {
            name: "Chris",
            score: "80"
        }
    ]
    expect(actual).toStrictEqual(expected);
})

test("Put array of 3 in order", () => {
    const actual = squatLeaders([
        {
            name: "Liz",
            score: "50"
        },
        {
            name: "Loz",
            score: "20"
        },
        {
            name: "Jordan",
            score: "100"
        },
    
    ]);

    const expected = [
        {
            name: "Jordan",
            score: "100"
        },

        {
            name: "Liz",
            score: "50"
        },
        {
            name: "Loz",
            score: "20"
        },
       
    ]
    expect(actual).toStrictEqual(expected);
})



//maybe a test to ensure that only 3 objects are returned?