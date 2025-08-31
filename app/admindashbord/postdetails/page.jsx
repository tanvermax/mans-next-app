"use client";

import React from "react";
import Dashboard from "../Dashboard";
import PostDetails from "./PostDetails";
import Postadd from "./Poastadd";

const AdminHomePage = () => {
  return (
    <Dashboard>
      <div className="h-screen overflow-auto">
        <Postadd/>
        <PostDetails/>
      </div>
    </Dashboard>
  );
};

export default AdminHomePage;
