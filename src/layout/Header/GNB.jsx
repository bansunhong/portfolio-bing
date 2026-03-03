import { NavLink } from "react-router-dom";
import styles from "./GNB.module.css";

export default function GNB({ gnb, openMenu, setOpenMenu, setIsHovered, isDesktop, submenuRefs, headerActive }) {
    return (
        <nav className={styles.gnbMenu}>
            <ul>
                {gnb.map((item, idx) => (
                    <li
                        key={item.path}
                        onMouseEnter={() => {
                            if (isDesktop) {
                                setOpenMenu(idx);
                                setIsHovered(true);
                            }
                        }}
                        onMouseLeave={() => {
                            if (isDesktop) setOpenMenu(null);
                        }}
                    >
                        <NavLink to={item.path} className={({ isActive }) => (isActive ? styles.activeLink : "")}>
                            {item.title}
                        </NavLink>

                        {item.subMenu && (
                            <ul ref={(el) => (submenuRefs.current[idx] = el)} className={`${styles.subMenu} ${openMenu === idx ? styles.active : ""} ${headerActive ? styles.headerActive : ""}`}>
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
        </nav>
    );
}
