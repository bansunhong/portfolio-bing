import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./MobileSidePanel.module.css";

export default function MobileSlideMenu({ isActive = false, onClose, menuData = [] }) {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        if (isActive) document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = originalOverflow);
    }, [isActive]);

    return (
        <>
            <div className={`${styles.mobileBackdrop} ${isActive ? styles.active : ""}`} onClick={onClose} />

            <div className={`${styles.mobilePanel} ${isActive ? styles.active : ""}`} role="dialog" aria-modal="true">
                <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
                    <FaTimes />
                </button>

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
