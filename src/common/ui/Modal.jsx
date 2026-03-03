import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

export default function ModalWithTodayHide({ isOpen, onClose, children, closeOnBackdrop = true, storageKey = "modalHiddenDate" }) {
    const [shouldShow, setShouldShow] = useState(isOpen);
    const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

    useEffect(() => {
        const hiddenDate = localStorage.getItem(storageKey);
        if (hiddenDate === today) {
            setShouldShow(false); // 오늘은 안 보이게
        } else {
            setShouldShow(isOpen);
        }
    }, [isOpen, storageKey, today]);

    const handleClose = (hideToday = false) => {
        if (hideToday) {
            localStorage.setItem(storageKey, today);
        }
        setShouldShow(false);
        onClose?.();
    };

    useEffect(() => {
        if (!shouldShow) return;

        // ESC 키 닫기
        const handleEsc = (e) => {
            if (e.key === "Escape") handleClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [shouldShow]);

    if (!shouldShow) return null;

    return createPortal(
        <div style={overlayStyle} onClick={closeOnBackdrop ? () => handleClose() : undefined}>
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
                <button style={closeButtonStyle} onClick={() => handleClose()}>
                    <FaTimes style={buttonColorStyle} />
                </button>
                {children}

                <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end" }}>
                    <button onClick={() => handleClose(true)} style={buttonColorStyle}>
                        오늘 하루 안 보기
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modalStyle = {
    position: "relative",
    backgroundColor: "#fff",
    padding: "40px 24px 16px",
    borderRadius: "12px",
    width: "400px",
    maxWidth: "90%",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "12px",
    border: "none",
    background: "transparent",
    fontSize: "18px",
    cursor: "pointer",
};

const buttonColorStyle = {
    color: "#000",
};
