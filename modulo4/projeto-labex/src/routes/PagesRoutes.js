import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import LoginPage from "../pages/LoginPage"
import AdminHomePage from "../pages/AdminHomePage"
import CreateTripsPage from "../pages/CreateTripPage"
import TripDetailsPage from "../pages/TripDetailsPage"


const PagesRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trips/create" element={<CreateTripsPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default PagesRoutes;