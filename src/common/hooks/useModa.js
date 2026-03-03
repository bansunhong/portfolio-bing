// 모달훅 예시

import { useState, useCallback } from "react";

export function useModal(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    return { isOpen, open, close, toggle };
}

// 사용
// import { useModal } from "./useModal";
// import Modal from "./Modal";

// export default function App() {
//   const { isOpen, open, close } = useModal();

//   return (
//     <>
//       <button onClick={open}>모달 열기</button>

//       <Modal isOpen={isOpen} onClose={close}>
//         <h2>클릭 시 열리는 모달</h2>
//       </Modal>
//     </>
//   );
// }

// /////////////////////

// 1️⃣ useState 사용

// const [isOpen, setIsOpen] = useState(initialState);

// isOpen → 모달이 열려있는지(true) 닫혀있는지(false) 상태값

// setIsOpen → 상태를 바꾸는 함수

// initialState → 모달이 처음 렌더링될 때 열려있을지 여부, 보통 false로 시작

// 즉, 이 훅의 핵심 상태는 isOpen 하나입니다.

// 2️⃣ useCallback 왜 쓰는가?

// const open = useCallback(() => setIsOpen(true), []);

// useCallback → React에서 함수를 메모이제이션해서 같은 레퍼런스를 유지하도록 함

// 이유:

// 자식 컴포넌트에 props로 넘길 때 불필요한 리렌더 방지

// React.memo, useEffect, useMemo에서 안정적으로 사용할 수 있음

// [] → 의존성 배열이 비어있어서, 컴포넌트가 재렌더되어도 같은 함수 유지

// 3️⃣ open, close, toggle 함수 의미
// const open = useCallback(() => setIsOpen(true), []);
// const close = useCallback(() => setIsOpen(false), []);
// const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

// open → 클릭이나 이벤트에서 모달을 여는 함수

// <button onClick={open}>모달 열기</button>

// close → 모달 닫기 버튼이나 ESC키, 백드롭 클릭 시 사용

// <Modal isOpen={isOpen} onClose={close} />

// toggle → 모달 상태 반전

// 현재 열려있으면 닫고, 닫혀있으면 열고 싶을 때

// 예: 햄버거 메뉴, 드롭다운, 임시 토글 UI

// <button onClick={toggle}>열기/닫기</button>

// 4️⃣ 왜 이 패턴이 실무에서 좋냐?

// 한 훅에서 모달 상태 + 조작함수를 다 관리 → 재사용성↑

// 버튼마다 따로 상태 만들 필요 없음

// 여러 모달에도 쉽게 적용 가능

// useCallback 덕분에 불필요한 리렌더 방지, 성능 최적화
