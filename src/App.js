import React from "react";
import { Route, Routes } from "react-router-dom";

// 공통 레이아웃
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer/Footer";

// 페이지
import MainPage from "./pages/MainPage";

export default function App() {
    return (
        <>
            {/* 공통 Header */}
            <Header />

            {/* 페이지 라우팅 */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                {/* 다른 페이지 라우팅 예시 */}
                {/* <Route path="/about" element={<AboutPage />} /> */}
            </Routes>

            {/* 공통 Footer */}
            <Footer />
        </>
    );
}
