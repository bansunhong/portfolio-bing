import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 공통 레이아웃
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer/Footer";

// 페이지
import MainPage from "./pages/MainPage";

export default function App() {
    return (
        <Router>
            {/* 공통 Header */}
            <Header />

            {/* 페이지 라우팅 */}
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>

            {/* 공통 Footer */}
            <Footer />
        </Router>
    );
}
