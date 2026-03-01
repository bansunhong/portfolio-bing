import { NavLink } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import styles from "./Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import iceCream from "../../assets/img/img_product_01.png";
import milkCheese from "../../assets/img/img_product_02.png";
import fermentedMilk from "../../assets/img/img_product_03.png";
import coffee from "../../assets/img/img_product_04.png";
import juice from "../../assets/img/img_product_05.png";
import drink from "../../assets/img/img_product_06.png";
import dessert from "../../assets/img/img_product_07.png";
import health from "../../assets/img/img_product_08.png";
import products from "../../assets/img/img_product_09.png";

import brandImg01 from "../../assets/img/img_brand_01.png";
import brandImg02 from "../../assets/img/img_brand_02.png";
import brandImg03 from "../../assets/img/img_brand_03.png";
import brandImg04 from "../../assets/img/img_brand_04.png";
import brandImg05 from "../../assets/img/img_brand_05.png";
import brandImg06 from "../../assets/img/img_brand_06.png";

export default function ProductBrandSlider() {
    /* 모바일 체크 */
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    /* 상품 리스트 */
    const productList = [
        { name: "아이스크림", img: iceCream, text: "VIEW MORE" },
        { name: "우유/치즈", img: milkCheese, text: "VIEW MORE" },
        { name: "발효유", img: fermentedMilk, text: "VIEW MORE" },
        { name: "커피", img: coffee, text: "VIEW MORE" },
        { name: "주스", img: juice, text: "VIEW MORE" },
        { name: "음료", img: drink, text: "VIEW MORE" },
        { name: "스낵/디저트", img: dessert, text: "VIEW MORE" },
        { name: "건강지향", img: health, text: "VIEW MORE" },
        { name: "수출제품", img: products, text: "VIEW MORE" },
    ];

    /* 브랜드 리스트 */
    const brandList = [
        { name: "더단백", img: brandImg01 },
        { name: "GLC 더케어", img: brandImg02 },
        { name: "a Cafela", img: brandImg03 },
        { name: "요플레", img: brandImg04 },
        { name: "바나나맛 우유", img: brandImg05 },
        { name: "VIVACITY", img: brandImg06 },
    ];

    const productRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // 👈 다시 false로
                }
            },
            {
                threshold: 0.3,
            },
        );

        if (productRef.current) {
            observer.observe(productRef.current);
        }

        return () => observer.disconnect();
    }, []);

    /* 모바일에서만 순서 변경 */
    const reorderedProductList = useMemo(() => {
        if (!isMobile) return productList;
        const odd = [],
            even = [];
        productList.forEach((item, i) => (i % 2 === 0 ? odd : even).push(item));
        return [...odd, ...even];
    }, [isMobile]);

    const reorderedBrandList = useMemo(() => {
        if (!isMobile) return brandList;
        const odd = [],
            even = [];
        brandList.forEach((item, i) => (i % 2 === 0 ? odd : even).push(item));
        return [...odd, ...even];
    }, [isMobile, brandList]);

    /* 슬라이더 설정 */
    const productSettings = {
        dots: false,
        infinite: false, // 무한 반복 끄기
        speed: 500,
        slidesToShow: 6, // PC 기준
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1, // 모바일 한 화면
                    slidesToScroll: 1, // 1개씩 슬라이드
                    rows: 2, // 2줄
                    slidesPerRow: 3, // 한 줄에 3개
                    arrows: false,
                    infinite: false,
                },
            },
        ],
    };

    const brandSettings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                    slidesPerRow: 3,
                    arrows: false,
                    infinite: false,
                },
            },
        ],
    };

    return (
        <section className={styles.mainSection2}>
            {/* Product Section */}
            <div ref={productRef} className={styles.sectionProductBlock}>
                <h3 className={styles.sectionTitle}>행복한 빙그레의 맛!</h3>
                <Slider {...productSettings} className={styles.sliderList}>
                    {reorderedProductList.map((item, idx) => (
                        <div key={idx} className={`${styles.sliderItem} ${productVisible ? styles.fadeUp : ""}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                            <NavLink to="/" className={styles.sliderProductLink}>
                                <img src={item.img} alt={item.name} />
                                <div className={styles.textWrap}>
                                    <span className={styles.nameText}>{item.name}</span>
                                    <span className={styles.hoverText}>{item.text}</span>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Brand Section */}
            <div ref={productRef} className={styles.sectionBrandBlock}>
                <h3 className={styles.sectionTitle}>BRAND SHOP</h3>
                <Slider {...brandSettings} className={styles.sliderList}>
                    {reorderedBrandList.map((item, idx) => (
                        <div key={idx} className={`${styles.sliderItem} ${productVisible ? styles.fadeUp : ""}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                            <NavLink to="/" className={styles.sliderBrandLink}>
                                <img src={item.img} alt={item.name} />
                            </NavLink>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
