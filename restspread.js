"use strict";

const person = {
  name: "Michael",
  age: 26,
  status: "active"
};

const accountSettings = {
  ...person,
  status: "inactive",
  mood: "happy"
};

console.log(accountSettings);
