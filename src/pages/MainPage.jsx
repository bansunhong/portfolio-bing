import React from "react";
import Container from "../layout/Container/Container";
import MainHero from "../features/main/MainHero";
import ProductBrandSlider from "../features/main/ProductBrandSlider";
import CsReport from "../features/main/CsReport";

export default function MainPage() {
    return (
        <>
            {/* Hero 영역 */}
            <MainHero />
            <Container>
                {/* 슬라이드 영역 */}
                <ProductBrandSlider />

                {/* 고객센터 및 온라인 제보 영역 */}
                <CsReport />
            </Container>
        </>
    );
}
