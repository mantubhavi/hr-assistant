import styles from "./button.module.css";

const Button = ({
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <>
      <button
        type={type}
        className={`${styles.btn} ${styles[variant]}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
