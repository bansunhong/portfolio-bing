import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./MobileSidePanel.module.css";

export default function MobileSlideMenu({ isActive = false, onClose, menuData = [] }) {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        if (isActive) document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = originalOverflow);
    }, [isActive]);

    // 방문자 수 확인
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://count.cab/hit/bansunhong-portfolio-bing")
            .then((res) => res.json())
            .then((data) => setCount(data.value))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className={`${styles.mobileBackdrop} ${isActive ? styles.active : ""}`} onClick={onClose} />

            <div className={`${styles.mobilePanel} ${isActive ? styles.active : ""}`} role="dialog" aria-modal="true">
                <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
                    <FaTimes />
                </button>

                <div style={{ paddingRight: "20px" }}>
                    <span style={{ fontSize: "12px" }}>방문자: {count}</span>
                </div>
                <ul>
                    {menuData.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                            {item.subMenu && (
                                <ul>
                                    {item.subMenu.map((sub) => (
                                        <li key={sub.path}>
                                            <NavLink to={sub.path}>{sub.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
