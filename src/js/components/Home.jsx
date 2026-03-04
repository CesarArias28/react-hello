import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-4">

                <div className="row">
                    <div className="col-12 mb-4">
                        <Jumbotron />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-3 mb-3"><Card /></div>
                    <div className="col-12 col-md-3 mb-3"><Card /></div>
                    <div className="col-12 col-md-3 mb-3"><Card /></div>
                    <div className="col-12 col-md-3 mb-3"><Card /></div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Home;