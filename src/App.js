import React, {Suspense, lazy, useEffect, useState} from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage";

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <HomePage/>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);