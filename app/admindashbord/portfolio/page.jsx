"use client";

import React from "react";
import Dashboard from "../Dashboard";
import DynamicPortfolio from "./DynamicPortfolio";


const AdminHomePage = () => {
  return (
    <Dashboard>
        <DynamicPortfolio/>
    </Dashboard>
  );
};

export default AdminHomePage;
