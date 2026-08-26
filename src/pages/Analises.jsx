import { useState } from "react";
import CurrencyTabs from "../components/Analytics/CurrencyTabs";
import styles from "./Analises.module.css";
import StatCardsRow from "../components/Analytics/StatCardsRow";
import DifferentialBanner from "../components/Analytics/DifferentialBanner";
import RateEvolutionSection from '../components/Analytics/RateEvolutionSection';
import SourceComparisonTable from '../components/Analytics/SourceComparisonTable';



function Analises() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  return (
    <main className={styles.page}>
      <CurrencyTabs selected={selectedCurrency} onSelect={setSelectedCurrency} />
      <StatCardsRow />
      <DifferentialBanner 
        label="Mercado Informal"
        title="O diferencial que ninguém mostra."
        subtitle="vs. BNA actualizado diariamente"
        value="+11.2 %"
        note="+103 Kz/unidade"
      />
      <RateEvolutionSection />
      <SourceComparisonTable />
    </main>
  );
}

export default Analises;