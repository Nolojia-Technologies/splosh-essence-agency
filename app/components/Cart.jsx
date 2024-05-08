"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/app/store/Cart";
import styles from "@/app/style/navbar.module.css";
import {
  MinusIcon,
  PlusIcon as AddIcon,
  TrashIcon as DeleteTcon,
  ArrowLeftIcon as BackIcon,
  ShoppingBagIcon as ShoppingIcon,
  ChevronDoubleRightIcon as CheckOutIcon,
} from "@heroicons/react/24/outline";

export default function Cart() {
  const router = useRouter();
  const { toggleCart } = useCartStore();
  const [cartData, setCartData] = useState([
    {
      id: 1,
      image: "/assets/hero1.png",
      price: 3000,
      name: "product",
      previousPrice: 4000,
      DeliveryFee: 200,
    },
    {
      id: 2,
      image: "/assets/hero2.png",
      price: 4000,
      name: "product",
      previousPrice: 5000,
      DeliveryFee: 100,
    },
  ]);

  const [TotalPrice, setTotalPrice] = useState(0);
  const [TotalDelivery, setTotalDelivery] = useState(0);

  const calculateTotal = () => {
    let totalPrice = 0;
    let totalDelivery = 0;
    cartData.forEach((item) => {
      totalPrice += item.price;
      totalDelivery += item.DeliveryFee;
    });
    setTotalPrice(totalPrice);
    setTotalDelivery(totalDelivery);
  };

  const DeleteCart = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
    calculateTotal();
  };

  const add = (index) => {
    const updatedCart = [...cartData];
    updatedCart[index].quantity += 1;
    setCartData(updatedCart);
    calculateTotal();
  };

  const minus = (index) => {
    const updatedCart = [...cartData];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartData(updatedCart);
      calculateTotal();
    }
  };

  const checkOut = () => {
    // Add checkout logic here
    toast.success("Checkout successful!");
  };

  useEffect(() => {
    calculateTotal();
  }, [cartData]);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartNav}>
        <BackIcon className={styles.backIcon} height={24} />
        <h1>MyCart</h1>
        <ShoppingIcon className={styles.cartIcon} height={24} />
      </div>
      <div className={styles.cartContent}>
        {cartData.map((data, index) => (
          <div className={styles.cartCard} key={index}>
            <Image
              className={styles.cartImg}
              src={data.image}
              alt="Image"
              priority
            />
            <div
              className={styles.cardDelete}
              onClick={() => DeleteCart(data.id)}
            >
              <DeleteTcon className={styles.cartDelete} height={24} />
            </div>
            <div className={styles.cartModify}>
              <div
                className={styles.cartModifyContain}
                onClick={() => add(index)}
              >
                <AddIcon className={styles.cartAdd} height={18} />
              </div>
              <div
                className={styles.cartModifyContain}
                onClick={() => minus(index)}
              >
                <MinusIcon className={styles.cartMinus} height={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.cartFooterItem}>
          <div className={styles.cartItem}>
            <h1>Delivery Fee:</h1>
            <h2>ksh {TotalDelivery}</h2>
          </div>
          <div className={styles.cartItem}>
            <h1>Subtotal:</h1>
            <h2>ksh {TotalPrice}</h2>
          </div>
          <div className={styles.cartItem}>
            <h1>Total:</h1>
            <h2>ksh {TotalPrice + TotalDelivery}</h2>
          </div>
        </div>
        <button className={styles.checkOutBtn} onClick={() => checkOut()}>
          Checkout <CheckOutIcon className={styles.checkIcon} height={24} />
        </button>
        <span onClick={() => toggleCart}>Continue shopping</span>
      </div>
    </div>
  );
}