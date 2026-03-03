import { NavLink } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GNB } from ".";
import { PcOverlayPanel, MobileSidePanel } from "../OverlayPanel";
import { FaBars, FaShareSquare } from "react-icons/fa";
import styles from "./Header.module.css";
import useMediaQuery from "../../common/hooks/useMediaQuery";

const headerTop = ["구매포털시스템", "인재채용"];
const gnb = [
    {
        title: "회사소개",
        path: "/company",
        subMenu: [
            { title: "경영이념", path: "/company/philosophy" },
            { title: "사업분야", path: "/company/business" },
            { title: "히스토리", path: "/company/history" },
            { title: "CEO인사말", path: "/company/ceo" },
            { title: "사업장소개", path: "/company/introduce" },
        ],
    },
    {
        title: "제품소개",
        path: "/product",
        subMenu: [
            { title: "아이스크림", path: "/product/icecream" },
            { title: "우유/치즈", path: "/product/milkCheese" },
            { title: "발효유", path: "/product/fermentedMilk" },
            { title: "커피", path: "/product/coffee" },
            { title: "주스", path: "/product/juice" },
            { title: "음료", path: "/product/drink" },
            { title: "스낵/디저트", path: "/product/dessert" },
            { title: "건강지향", path: "/product/health" },
            { title: "수출제품", path: "/product/export" },
        ],
    },
    {
        title: "지속가능경영",
        path: "/business",
        subMenu: [
            { title: "지속가능경영 체계", path: "/business/1" },
            { title: "Eco-Friendly", path: "/business/2" },
            { title: "Shared Value", path: "/business/3" },
            { title: "Global Integrity", path: "/business/4" },
            { title: "윤리준법경영", path: "/business/5" },
            { title: "사회공헌", path: "/business/6" },
            { title: "보고서 및 정책", path: "/business/7" },
        ],
    },
    {
        title: "투자정보",
        path: "/investment",
        subMenu: [
            { title: "재무정보", path: "/investment/1" },
            { title: "주식정보", path: "/investment/2" },
            { title: "전자공고", path: "/investment/3" },
            { title: "공시정보", path: "/investment/4" },
            { title: "IR자료실", path: "/investment/5" },
        ],
    },
    {
        title: "뉴스룸",
        path: "/news",
        subMenu: [
            { title: "새소식", path: "/news/1" },
            { title: "보도자료", path: "/news/2" },
            { title: "빙그레 스토리", path: "/news/3" },
            { title: "미디어 라이브러리", path: "/news/4" },
        ],
    },
    {
        title: "고객센터",
        path: "/customerCenter",
        subMenu: [
            { title: "고객상담", path: "/customerCenter/1" },
            { title: "제품공급문의", path: "/customerCenter/2" },
            { title: "사이버 신고센터", path: "/customerCenter/3" },
            { title: "안전신문고", path: "/customerCenter/4" },
            { title: "개인정보처리방침", path: "/customerCenter/5" },
        ],
    },
];

export default function Header() {
    const [openMenu, setOpenMenu] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const headerRef = useRef(null);
    const submenuRefs = useRef([]); // TS 전환 시 타입만 추가하면 됨

    const isDesktop = useMediaQuery("(min-width: 1025px)");

    const closeMenu = () => setMenuOpen(false);

    // header 높이 계산
    useLayoutEffect(() => {
        if (!headerRef.current) return;

        const baseHeight = 147;
        const extraHeight = 100;
        let newHeight = baseHeight;

        if (isDesktop && isHovered) {
            let maxSubHeight = 0;
            submenuRefs.current.forEach((menu) => {
                if (menu) maxSubHeight = Math.max(maxSubHeight, menu.scrollHeight);
            });
            newHeight = baseHeight + maxSubHeight + extraHeight;
        }

        if (!isDesktop && menuOpen) {
            const bottomSection = headerRef.current.querySelector(`.${styles.headerBottom}`);
            if (bottomSection) newHeight = bottomSection.scrollHeight;
        }

        setHeaderHeight(newHeight);
    }, [isHovered, isDesktop, menuOpen]);

    // ESC 키 닫기
    useEffect(() => {
        if (!menuOpen) return;
        const handleKey = (e) => {
            if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [menuOpen]);

    // 스크롤 fixed 처리
    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 화면이 모바일로 바뀌면 hover 상태 초기화
    useEffect(() => {
        if (!isDesktop) {
            setIsHovered(false);
            setOpenMenu(null);
        }
    }, [isDesktop]);

    // 방문자 수 확인
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://count.cab/hit/bansunhong-portfolio-bing")
            .then((res) => res.json())
            .then((data) => setCount(data.value))
            .catch((err) => console.log(err));
    }, []);

    return (
        <header
            ref={headerRef}
            className={`${styles.header} ${isHovered ? styles.active : ""} ${isFixed ? styles.fixed : ""}`}
            style={{ "--header-height": `${headerHeight}px` }}
            onMouseLeave={() => {
                if (isDesktop) setIsHovered(false); // header 밖으로 나가면 active 제거
                setOpenMenu(null);
            }}
        >
            <div className={styles.headerTop}>
                <div style={{ paddingRight: "20px" }}>
                    <span style={{ fontSize: "12px" }}>방문자: {count}</span>
                </div>
                <ul>
                    {headerTop.map((item) => (
                        <li key={item}>
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                {item}
                                <FaShareSquare />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.headerBottom}>
                <h1 className={styles.headerLogo}>
                    <NavLink to="/">
                        <span className="srOnly">빙그레</span>
                    </NavLink>
                </h1>

                <GNB gnb={gnb} openMenu={openMenu} setOpenMenu={setOpenMenu} setIsHovered={setIsHovered} isDesktop={isDesktop} submenuRefs={submenuRefs} headerActive={isHovered} />

                {/* 햄버거 메뉴 pc / 모바일 */}
                <button className={styles.hamburgerBtn} onClick={() => setMenuOpen(true)} aria-label="메뉴 열기" aria-expanded={menuOpen}>
                    <FaBars className={styles.icon} />
                </button>

                {/* {menuOpen && <OverlayPanel menuData={gnb} onClose={closeMenu} />} */}
                {isDesktop ? menuOpen && <PcOverlayPanel menuData={gnb} onClose={closeMenu} /> : <MobileSidePanel isActive={menuOpen} onClose={closeMenu} menuData={gnb} />}
            </div>
        </header>
    );
}
