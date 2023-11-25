import React, {Suspense, lazy, useEffect, useState} from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
    return(
        <>
            <div className="underline bg-black">Starting Funtime</div>
        </>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);