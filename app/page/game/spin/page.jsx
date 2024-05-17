"use client";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import styles from "@/app/style/spinwheel.module.css";

const data = [
  { option: "50", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 50 },
  { option: "100", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 100 },
  { option: "150", style: { backgroundColor: "#191919" , textColor: "#ffffff"}, value: 150 },
  { option: "200", style: { backgroundColor: "#F04444" , textColor: "#ffffff"}, value: 200 },
  { option: "250", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 250 },
  { option: "300", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 300 },
  { option: "350", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 350 },
  { option: "400", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 400 },
  { option: "450", style: { backgroundColor: "#191919" ,textColor: "#ffffff"}, value: 450 },
  { option: "500", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 500 },
  { option: "550", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 550 },
  { option: "600", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 600 },
  { option: "650", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 650 },
  { option: "700", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 700 },
  { option: "750", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 750 },
  { option: "800", style: { backgroundColor: "#F04444", textColor: "#ffffff"}, value: 800 },
  { option: "850", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 850 },
  { option: "900", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 900 },
  { option: "950", style: { backgroundColor: "#191919", textColor: "#ffffff" }, value: 950 },
  { option: "1000", style: { backgroundColor: "#F04444", textColor: "#ffffff" }, value: 1000 },
];

export default function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(0);
  const [betAmount, setBetAmount] = useState(50);

  useEffect(() => {
    // Check if the user is logged in
    const loggedIn = checkIfLoggedIn();
    setIsLoggedIn(loggedIn); 

    // Get the user's balance
    const userBalance = getUserBalance();
    setBalance(userBalance);
  }, []);

  const handleSpinClick = () => {
    if (isLoggedIn && balance >= betAmount) {
      if (!mustSpin) {
        setPrizeNumber(data.findIndex((item) => item.value === 50));
        setMustSpin(true);
        setBalance(balance - betAmount + 50);
      } else {
        toast.error("The spin is already in progress!");
      }
    } else if (!isLoggedIn) {
      toast.error("You must be logged in to spin the wheel!");
    } else {
      toast.error("You don't have enough balance to spin the wheel!");
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    toast.success("Congratulations! You won 50!");
  };

  const handleBetAmountChange = (event) => {
    const amount = parseInt(event.target.value);
    if (amount >= 50 && amount <= 1000) {
      setBetAmount(amount);
    } else {
      toast.error("Bet amount must be between 50 and 1000.");
    }
  };

  return (
    <div className={styles.spinContainer}>
      <div className={styles.spinInner}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        className={styles.spinWheel}
        outerBorderColor={['#ffffff']}
        innerBorderColor={['#ffffff']}
        radiusLineColor={['#ffffff']}
        // pointerProps={'/public/assets/spin.png'}
        onStopSpinning={handleStopSpinning}
      />
      </div>
      
      <div className={styles.spinInfo}>
        <h1>Spin to win</h1>
        <p>Choose the amount you want</p>
        <p>Account Balance: {balance}</p>
      <input
        type="number"
        value={betAmount}
        className={styles.spinInput}
        onChange={handleBetAmountChange}
        min="50"
        max="1000"
        step="50"
      />
      <button onClick={handleSpinClick} className={styles.btnSpin} disabled={!isLoggedIn || balance < betAmount}>
        Spin now
      </button>
      </div>

    </div>
  );
}


function checkIfLoggedIn() {
  return true;
}

function getUserBalance() {
  return 1000;
}