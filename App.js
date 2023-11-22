import React, {Suspense, lazy, useEffect, useState} from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
    return(
        <>
            <h1>Starting Funtime(ClubNights)</h1>
        </>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);