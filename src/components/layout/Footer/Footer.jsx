import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import footerBlog from "../../../assets/img/footer_sns01.png";
import footerInstagram from "../../../assets/img/footer_sns02.png";
import footerYoutube from "../../../assets/img/footer_sns03.png";
import footerTft from "../../../assets/img/footer_sns04.png";

export default function Footer() {
    const footerMenu = ["개인정보처리방침", "오시는길"];
    const footerQnaCenter = ["고객센터", "1:1이메일문의"];
    const snsList = [
        { name: "blog", img: footerBlog },
        { name: "instagram", img: footerInstagram },
        { name: "youtube", img: footerYoutube },
        { name: "tft", img: footerTft },
    ];
    return (
        <footer>
            <div className={styles.footerSec01}>
                <div className={styles.footerLogo}>
                    <span className="srOnly">빙그레</span>
                </div>
                <ul className={styles.footerInfoList}>
                    {footerMenu.map((el, idx) => (
                        <li key={idx}>
                            <NavLink to="/">{el}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footerSec02}>
                <ul className={styles.footerAddress}>
                    <li>회사명 : 빙그레</li>
                    <li>경기도 남양주시 다산동 4344-3 / 경기도 남양주시 다산순환로 45(다산동)</li>
                </ul>
            </div>
            <div className={styles.footerSec03}>
                <div className={styles.footerSec03Inner}>
                    <p className={styles.copyright}>ⓒ Binggrae all rights reserved.</p>
                    <ul>
                        {footerQnaCenter.map((el, idx) => (
                            <li key={idx}>
                                <NavLink to="/">{el}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className={styles.footerSnsList}>
                    {snsList.map((el, idx) => (
                        <li key={idx}>
                            <NavLink to="/">
                                <img src={el.img} alt={el.name} />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
