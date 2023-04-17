import React from "react";

const projects = [
    {
        gif: "/GraphCreator.gif",
        altText: `Graph Creator GIF`,
        title: "Project 1: Graph Creator",
        desc: `Graph creator application inspired by ChartBlocks. Application allows users to
        create customized bar charts, line charts, and pie charts, which can be downloaded and saved.` ,
        react: true,
        redux: true,
        router: true,
        site: "https://gentle-chimera-e87178.netlify.app/",
    },

    {
        gif: "/MoviesUIGIF.gif",
        altText: "Movies UI GIF",
        title: `Project 2: Movies UI`,
        desc: `Movie browsing UI created using TBDB API. Features include
        ability to search through trending movies, filter movies by category, 
        and manual search function. Favourited movies are saved to local storage.`,
        react: true,
        redux: false,
        router: true,
        site: "https://peppy-yeot-ee7b67.netlify.app/",

    },

    {
        gif: "/Quizzical.gif",
        altText: `Quizzical GIF`,
        title: "Project 3: Quizzical",
        desc: `Simple quiz game where users are tasked with answering random trivia based questions. Created using
        the Open Trivia Database (OTDB) API.`,
        react: true,
        redux: false,
        router: false,
        site: "https://darshandesai1095.github.io/quizzical-trivia-game/",
    }
]

export default projects