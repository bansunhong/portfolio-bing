import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// 공통 레이아웃
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

// 페이지
import MainPage from "./pages/MainPage";

// 컴포넌트
import Modal from "./common/ui/Modal";
import Button from "./common/ui/Button";

export default function App() {
    const [isOpen, setIsOpen] = useState(true);

    // iOS 100vh 문제 해결
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        setVh();
        window.addEventListener("resize", setVh);

        return () => window.removeEventListener("resize", setVh);
    }, []);

    return (
        <>
            {/* 공통 Header */}
            <Header />

            {/* 페이지 라우팅 */}
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>

            {/* 공통 Footer */}
            <Footer />

            {/* 모달 팝업 영역 */}
            <div>
                {/* <button onClick={() => setIsOpen(true)}>모달 열기</button> */}

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <h2>리액트로 작업한 포트폴리오 페이지입니다!</h2>
                    <br />
                    <p>메인 작업 완료 되었고, 햄버거 메뉴는 차후에 업데이트 될 예정입니다!</p>
                    <div style={modalButtonStyle}>
                        <Button onClick={() => setIsOpen(false)}>확인</Button>
                    </div>
                </Modal>
            </div>
        </>
    );
}

const modalButtonStyle = {
    paddingTop: "24px",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
};
