import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import styles from './Analytics.module.css';

const chartDataByRange = {
  '7D': [
    { day: 'Seg', informal: 1000, bna: 902 },
    { day: 'Ter', informal: 1005, bna: 904 },
    { day: 'Qua', informal: 1008, bna: 905 },
    { day: 'Qui', informal: 1012, bna: 907 },
    { day: 'Sex', informal: 1015, bna: 910 },
    { day: 'Sáb', informal: 1018, bna: 913 },
    { day: 'Dom', informal: 1020, bna: 917 },
  ],
  '14D': [
    { day: '1', informal: 985, bna: 895 },
    { day: '4', informal: 995, bna: 898 },
    { day: '7', informal: 1005, bna: 903 },
    { day: '10', informal: 1012, bna: 908 },
    { day: '14', informal: 1020, bna: 917 },
  ],
  '30D': [
    { day: '1', informal: 960, bna: 880 },
    { day: '10', informal: 985, bna: 892 },
    { day: '20', informal: 1005, bna: 905 },
    { day: '30', informal: 1020, bna: 917 },
  ],
  '3M': [
    { day: 'Fev', informal: 900, bna: 850 },
    { day: 'Mar', informal: 950, bna: 875 },
    { day: 'Abr', informal: 1020, bna: 917 },
  ],
};

function RateEvolutionChart({ range }) {
  const data = chartDataByRange[range];

  return (
    <div className={styles.chartArea}>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <CartesianGrid stroke="#eef1f7" vertical={false} />
          <XAxis
            dataKey="day"
            stroke="#9aa6bf"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#9aa6bf"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value} Kz`}
          />

          <Area
            type="monotone"
            dataKey="informal"
            stroke="#d9a441"
            fill="#f5efe0"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="bna"
            stroke="#6f7da3"
            fill="#eef1f7"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RateEvolutionChart;