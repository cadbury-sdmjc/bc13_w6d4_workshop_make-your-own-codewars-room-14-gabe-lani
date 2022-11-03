import { expect, actual } from "@jest/globals";

import { 
    squatLeaders
} from "./main.js"

//👉 Write your tests below here:

test("Top three", () => {
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
        }
    ]);

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