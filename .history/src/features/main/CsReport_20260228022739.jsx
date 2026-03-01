import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/common/ui/Button";
import styles from "./Main.module.css";

export default function CsReport() {
    const qnaList = [
        { id: 1, question: "빙그레 건강기능식품을 주문할 수 있는 몰이 따로 있나요?" },
        { id: 2, question: "아이스크림, 음료 등 제품 공급(납품) 관련 문의드리고 싶어요. " },
        { id: 3, question: "빙그레 제품을 구입할 수 있는 온라인 몰이 있나요? " },
        { id: 4, question: "빙그레 제품을 다른 나라에 수출하고 싶어요." },
        { id: 5, question: "공장 견학을 가고 싶습니다. 신청은 어떻게 해야 하나요?" },
    ];

    // 프레이머 모션 애니메이션 설정
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.3 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className={styles.mainSection3}>
            {/* 고객문의 및 불편사항 section */}
            <div className={styles.sectionQnaBlock}>
                <h3 className={styles.sectionTitle}>고객문의 및 불편사항</h3>
                <div className={styles.sectionQnaBox}>
                    <div className={styles.qnaBoxBanners}>
                        <NavLink className={styles.qnaBoxBanner01}>
                            <h4>이메일 상담</h4>
                            <p className={styles.bannerDescription}>
                                빙그레에 궁금한 사항을 문의해 주세요. <br />
                                <em>최대한 빠른 시일내에 친절하게 답변해드리겠습니다.</em>
                            </p>
                            <span className={styles.btnCounsel}>상담하기</span>
                        </NavLink>
                        <NavLink className={styles.qnaBoxBanner02}>
                            <h4>전화 상담</h4>
                            <p className={styles.bannerPhone}>080.022.0056</p>
                            <div className={styles.bannerDescription}>
                                <span>월~금(공휴일 제외)</span>
                                <span>09:00~17:30</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className={styles.qnaBoxHeader}>
                        <h4>자주 묻는 질문에 내용이 없을 경우, 이메일 및 전화 상담 바랍니다.</h4>
                        <NavLink className={styles.qnaBoxBtnMore}>
                            <Button variant="secondary">더보기</Button>
                        </NavLink>
                    </div>
                    <ul className={styles.qnaBoxList}>
                        {qnaList.map((item) => (
                            <li key={item.id}>
                                <NavLink>Q. {item.question}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 빙그레 임직원 및 종사자 온라인제보 section */}
            <div>
                <h3 className={styles.sectionTitle}>빙그레 임직원 및 종사자 온라인제보</h3>
                <div className={styles.sectionTipOffBlock}>
                    <div>
                        <NavLink>
                            <p>
                                빙그레 임직원의 부당한 요구 또는 업무처리, <br />
                                인권고충, 기타 부정행위 제보
                            </p>
                            <Button variant="primary">사이버 신고센터</Button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink>
                            <p>빙그레 종사자의 유해·위험요소 및 안전·보건에 관한 의견 제보</p>
                            <Button variant="primary">안전신문고</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
