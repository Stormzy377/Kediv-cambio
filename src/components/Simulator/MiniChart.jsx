import { LineChart, Line, ResponsiveContainer } from 'recharts';
import styles from './Simulator.module.css';

function MiniChart({ data }) {
  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height={140}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1a2b4c"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MiniChart;