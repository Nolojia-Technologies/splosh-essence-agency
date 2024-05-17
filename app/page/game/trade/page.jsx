'use client';
import Chart from 'chart.js/auto';
import { useRef, useEffect, useState } from 'react';
import styles from '@/app/style/trade.module.css';

const stockData = [
  { date: '2024-05-01', price: 100 },
  { date: '2024-05-02', price: 102 },
  { date: '2024-05-03', price: 99 },
  { date: '2024-05-04', price: 101 },
  { date: '2024-05-05', price: 103 },
  { date: '2024-05-06', price: 105 },
  { date: '2024-05-07', price: 107 },
  { date: '2024-05-08', price: 109 },
  { date: '2024-05-09', price: 111 },
  { date: '2024-05-10', price: 113 },
];

export default function TradingPage() {
  const chartRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: stockData.map((data) => data.date),
        datasets: [
          {
            label: 'Stock Price',
            data: stockData.map((data) => data.price),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
          },
        },
      },
    });
    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, []);

  const predictPrice = () => {
    // Use linear regression to predict the next price
    const dates = stockData.map((data) => new Date(data.date).getTime());
    const prices = stockData.map((data) => data.price);

    const n = dates.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

    for (let i = 0; i < n; i++) {
      sumX += dates[i];
      sumY += prices[i];
      sumXY += dates[i] * prices[i];
      sumX2 += dates[i] ** 2;
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
    const intercept = (sumY - slope * sumX) / n;

    const nextDate = new Date(stockData[stockData.length - 1].date);
    nextDate.setDate(nextDate.getDate() + 1);
    const nextDateTimestamp = nextDate.getTime();

    const predictedPrice = slope * nextDateTimestamp + intercept;

    setPrediction(predictedPrice);
  };

  return (
    <div className={styles.tradingContainer}> 
      <h1>Stock Price Prediction</h1>
      <canvas ref={chartRef} />
      {/* <button onClick={predictPrice}>Predict Price</button>
      {prediction && <p>Predicted Price: {prediction.toFixed(2)}</p>} */}
    </div>
  );
}