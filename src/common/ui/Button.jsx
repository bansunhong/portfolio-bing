import styles from "./Button.module.css";
import clsx from "clsx";
import { forwardRef } from "react";

const Button = forwardRef(({ children, variant = "primary", size = "md", fullWidth = false, disabled = false, loading = false, type = "button", onClick, className = "", ...props }, ref) => {
    const buttonClass = clsx(
        styles.button,
        styles[variant],
        styles[size],
        {
            [styles.fullWidth]: fullWidth,
            [styles.disabled]: disabled,
            [styles.loading]: loading,
        },
        className,
    );

    return (
        <button ref={ref} type={type} className={buttonClass} disabled={disabled || loading} onClick={onClick} {...props}>
            {loading ? "로딩중..." : children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
