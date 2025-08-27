"use client";

import React from "react";
import Dashboard from "../Dashboard";
import UserDetails from "./UserDetails";

const AdminHomePage = () => {
  return (
    <Dashboard>
        <UserDetails/>
    </Dashboard>
  );
};

export default AdminHomePage;
