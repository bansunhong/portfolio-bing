import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./PcOverlayPanel.module.css";

export default function PcOverlayMenu({ onClose, menuData = [] }) {
    const overlayRef = useRef(null);

    // body scroll lock
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    // 외부 클릭 닫기
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (overlayRef.current && !overlayRef.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={styles.pcOverlay}>
            <div className={styles.pcContent} ref={overlayRef} role="dialog" aria-modal="true">
                <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
                    <FaTimes />
                </button>

                {/* 내용 */}
                <div>
                    <ul>
                        {Array.isArray(menuData) &&
                            menuData.map((item) => (
                                <li key={item.path}>
                                    <NavLink to={item.path} onClick={onClose}>
                                        {item.title}
                                    </NavLink>
                                    {item.subMenu && (
                                        <ul>
                                            {item.subMenu.map((sub) => (
                                                <li key={sub.path}>
                                                    <NavLink to={sub.path} onClick={onClose}>
                                                        {sub.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
