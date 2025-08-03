const players = [
    {
        name: "Sachin",
        score: "100",
    },
    {
        name: "Rohit",
        score: "75",
    },
    {
        name: "Bumrah",
        score: "46",
    },
    {
        name: "Hardik",
        score: "55",
    },
    {
        name: "Gill",
        score: "72",
    },
    {
        name: "Virat",
        score: "95",
    },
    {
        name: "Jadeja",
        score: "65",
    },
    {
        name: "Choudhary",
        score: "60",
    },
    {
        name: "Dhoni",
        score: "99",
    },
    {
        name: "Sourav",
        score: "68",
    },
];

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player']

export default players;
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];