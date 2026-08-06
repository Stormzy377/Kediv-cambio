import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import useClickOutside from "../../hooks/useClickOutside";
import styles from "./Simulator.module.css";

const currencies = ["AOA", "USD", "EUR", "GBP", "ZAR", "BRL"];

function CurrencyDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  function handleSelect(code) {
    onChange(code);
    setIsOpen(false);
  }

  return (
    <div className={styles.dropdown} ref={containerRef}>
      <button
        type="button"
        className={styles.dropdownTrigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {value}
        <ChevronDown
          size={14}
          className={isOpen ? styles.ChevronOpen : styles.chevron}
        />
      </button>

      {isOpen && (
        <ul className={styles.dropdownList} role="listbox">
          {currencies.map((code) => (
            <li
              key={code}
              role="option"
              aria-selected={code === value}
              className={
                code === value
                  ? `${styles.dropdownOption} ${styles.selected}`
                  : styles.dropdownOption
              }
              onClick={() => handleSelect(code)}
            >
              {code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurrencyDropdown;