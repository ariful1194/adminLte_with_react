import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import ControlSidebar from "./layout/ControlSidebar";
export class Wrapper extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <Navbar />
          {/* Main Sidebar Container */}
          <Sidebar />
          {/* Content Wrapper. Contains page content */}
          <Content />
          {/* /.content-wrapper */}
          {/* Control Sidebar */}
          <ControlSidebar />
          {/* /.control-sidebar */}
          {/* Main Footer */}
          <Footer />
        </div>
      </>
    );
  }
}

export default Wrapper;
