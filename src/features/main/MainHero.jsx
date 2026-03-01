import styles from "./Main.module.css";
import mainBannerPc from "../../assets/img/pc_section01_4_ver6.png";
import mainBannerMo from "../../assets/img/mo_section01_4_ver4.png";
import { FaSearch } from "react-icons/fa";

export default function Section1() {
    const tags = ["#바나나맛우유", "#요플레그릭", "#아카페라", "#더단백", "#딥앤로우"];

    return (
        <section className={styles.mainSection1}>
            <div className={styles.mainSearchTag}>
                {/* 메인 검색 영역 */}
                <div className={styles.searchArea}>
                    <FaSearch className={styles.icon} />
                    <input type="text" placeholder="검색어를 입력해주세요"></input>
                    <button className={styles.searchBtn}>SEARCH</button>
                </div>

                {/* 태그 리스트 */}
                <div className={styles.TagList}>
                    <ul>
                        {tags.map((tag, idx) => (
                            <li key={idx}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 메인 비주얼 영역 */}
            <div className={styles.bgSection}>
                <img src={mainBannerPc} alt="pc버전 - 배경 관련 이미지 (대한민국 No.1 요거트 요플레가 만들면 다릅니다. 다양한 용량으로 언제 어디서나 맛있게!)" className={styles.pcBg} />
                <img src={mainBannerMo} alt="모바일버전 - 배경 관련 이미지 (대한민국 No.1 요거트 요플레가 만들면 다릅니다. 다양한 용량으로 언제 어디서나 맛있게!)" className={styles.moBg} />
            </div>
        </section>
    );
}
