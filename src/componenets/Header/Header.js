import React from "react";
import "../../css/Header/header.css";
import { words } from "../../words";

export default function Header(){
    return(
        <header>
        {words.headerTitle}
   </header>
    );
}