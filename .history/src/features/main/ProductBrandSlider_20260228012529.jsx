import { NavLink } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";
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
    const productList = useMemo(() => {
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

        if (!isMobile) return productList;
        const odd = [],
            even = [];
        productList.forEach((item, i) => (i % 2 === 0 ? odd : even).push(item));
        return [...odd, ...even];
    }, [isMobile]);

    /* 브랜드 리스트 */
    const brandList = useMemo(() => {
        const list = [
            { name: "더단백", img: brandImg01 },
            { name: "GLC 더케어", img: brandImg02 },
            { name: "a Cafela", img: brandImg03 },
            { name: "요플레", img: brandImg04 },
            { name: "바나나맛 우유", img: brandImg05 },
            { name: "VIVACITY", img: brandImg06 },
        ];

        if (!isMobile) return list;
        const odd = [],
            even = [];
        brandList.forEach((item, i) => (i % 2 === 0 ? odd : even).push(item));
        return [...odd, ...even];
    }, [isMobile]);

    const productRef = useRef(null);
    const brandRef = useRef(null);

    const [productVisible, setProductVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);

    useEffect(() => {
        const productObserver = new IntersectionObserver(
            ([entry]) => {
                setProductVisible(entry.isIntersecting);
            },
            { threshold: 0.9 },
        );

        const brandObserver = new IntersectionObserver(
            ([entry]) => {
                setBrandVisible(entry.isIntersecting);
            },
            { threshold: 0.9 },
        );

        if (productRef.current) productObserver.observe(productRef.current);
        if (brandRef.current) brandObserver.observe(brandRef.current);

        return () => {
            productObserver.disconnect();
            brandObserver.disconnect();
        };
    }, []);

    /* 슬라이더 설정 */
    const productSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
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
                    {productList.map((item, idx) => (
                        <div key={idx}>
                            <div
                                className={`${styles.sliderItem} ${productVisible ? styles.show : ""}`}
                                style={{
                                    animationDelay: `${idx * 0.35}s`,
                                }}
                            >
                                <NavLink to="/" className={styles.sliderProductLink}>
                                    <img src={item.img} alt={item.name} />
                                    <div className={styles.textWrap}>
                                        <span className={styles.nameText}>{item.name}</span>
                                        <span className={styles.hoverText}>{item.text}</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Brand Section */}
            <div ref={brandRef} className={styles.sectionBrandBlock}>
                <h3 className={styles.sectionTitle}>BRAND SHOP</h3>
                <Slider {...brandSettings} className={styles.sliderList}>
                    {brandList.map((item, idx) => (
                        <div key={idx}>
                            <div
                                className={`${styles.sliderItem} ${brandVisible ? styles.show : ""}`}
                                style={{
                                    animationDelay: `${idx * 0.35}s`,
                                }}
                            >
                                <NavLink to="/" className={styles.sliderBrandLink}>
                                    <img src={item.img} alt={item.name} />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
