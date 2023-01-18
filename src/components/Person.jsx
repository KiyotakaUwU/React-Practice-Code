import React from "react";
import { PersonClass } from "../models/personClass";
import State from "./State";

function Person({connected}) {
  const defaultPerson = new PersonClass(
    "Pepito",
    "Perez",
    "pepitoPerez@gmail.com",
    connected
  );
  return <State person={defaultPerson}></State>;
}

export default Person;
