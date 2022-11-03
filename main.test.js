import { expect, test } from "@jest/globals";
import { squatLeaders } from "./main.js"

//👉 Write your tests below here:
const coaches = [
    {
        name: "Liz",
        score: 50
    },
    {
        name: "Loz",
        score: 20
    },
    {
        name: "Jordan",
        score: 100
    },
    {
        name: "Helena",
        score: 25
    },
    {
        name: "Chris",
        score: 80
    },
    {
        name: "Arshi",
        score: 101
    },
    {
        name: "Charlotte",
        score: 60
    },
    {
        name: "Kazeem",
        score: 85
    },
    {
        name: "Hamza",
        score: 75
    },
    {
        name: "Vicky",
        score: 90
    }
];


test("Return top three from full array", () => {
    const actual = squatLeaders(coaches);

    const expected = [
        {
            name: "Arshi",
            score: 101
        },
        {
            name: "Jordan",
            score: 100
        },
        {
            name: "Vicky",
            score: 90
        }
    ]
    expect(actual).toStrictEqual(expected);
})

export {coaches};
