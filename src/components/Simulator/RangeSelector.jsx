import styles from "./Simulator.module.css";

const ranges = ['1H', '1D', '1S', '1M', '1A'];

function RangeSelector({ selected, onSelect }) {
    return (
        <div className={styles.rangeSelector}>
            {ranges.map((range) => (
                <button
                  key={range}
                  className={range === selected ? `${styles.rangeButton} ${styles.rangeActive}` : styles.rangeButton}
                  onClick={() => onSelect(range)}
                >
                    {range}
                </button>
            ))}
        </div>
    );
}

export default RangeSelector;