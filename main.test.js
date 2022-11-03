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

//tests return is an array
test("Returns array", () => {
    expect.any(Array);
})


//tests using the full coaches array
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

//tets using an array of 3 people
test("Rank Gabe, Lani and Fabbi", () => {
    const actual = squatLeaders([
        { 
            name: "Lani",
            score: 12
        },
        {
            name: "Fabbi",
            score: 30
        },
        {
            name: "Gabe",
            score: 65
        }
    ]);

    const expected = [
        {
            name: "Gabe",
            score: 65
        },
        {
            name: "Fabbi",
            score: 30
        },
        { 
            name: "Lani",
            score: 12
        }
    ]
    expect(actual).toStrictEqual(expected);

})

//tests using an array of 4 people
test("Rank top bootcampers", () => {
    const actual = squatLeaders([
        {
            name: "Bella and baby",
            score: 120
        },
        {
            name: "Taylor and chairs",
            score: 10
        },
        {
            name: "Ryan",
            score: 5000
        },
        {
            name: "Ryan",
            score: 5001
        }
    ]);
    const expected = [
        {
            name: "Ryan",
            score: 5001
        },
        {
            name: "Ryan",
            score: 5000
        },
        {
            name: "Bella and baby",
            score: 120
        }
    ]
    expect(actual).toStrictEqual(expected);
} )



export {coaches};

