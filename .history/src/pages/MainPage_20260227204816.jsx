import React from "react";
import Header from "../components/layout/Header";
import Container from "../components/layout/Container/Container";
import MainHero from "../features/main/MainHero";
import ProductBrandSlider from "../features/main/ProductBrandSlider";
import CsReport from "../features/main/CsReport";
import Footer from "../components/layout/Footer/Footer";

export default function MainPage() {
    return (
        <>
            {/* Header 영역 */}
            <Header />

            {/* Hero 영역 */}
            <MainHero />
            <Container>
                {/* 슬라이드 영역 */}
                <ProductBrandSlider />

                {/* 고객센터 및 온라인 제보 영역 */}
                <CsReport />
            </Container>

            {/* Footer */}
            <Footer />
        </>
    );
}
