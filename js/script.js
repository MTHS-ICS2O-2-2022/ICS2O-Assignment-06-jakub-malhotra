// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra 
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

const getActivity = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress);
    const jsonData = await result.json();
    console.log(jsonData);

    // Access the activity data
    const activity = jsonData.activity;
    const type = jsonData.type;

    // Update the HTML elements with the retrieved data
    document.getElementById("activity").innerHTML = "<p>Activity: " + activity + "</p>";
    document.getElementById("type").innerHTML = "<p>Type: " + type + "</p>";
  } catch (err) {
    console.log(err);
  }
};

getActivity("https://www.boredapi.com/api/activity/");