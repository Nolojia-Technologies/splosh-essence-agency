"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/Cart";
import styles from "@/app/style/cart.module.css";
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
  const { toggleCart, isCartOpen } = useCartStore();
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
    toast.success("item deleted");
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
    toast.success("Checkout successful!");
  };

  useEffect(() => {
    calculateTotal();
  }, [cartData]);

  return (
    <div
      className={`${styles.sideNav} ${
        isCartOpen === true ? styles.sideSlide : ""
      }`}
    >
      <div className={styles.cartNav}>
        <div onClick={() => toggleCart()}>
          <BackIcon className={styles.backIcon} height={24} />
        </div>
        <h1>My Cart</h1>
        <ShoppingIcon className={styles.cartIcon} height={24} />
      </div>
      <div className={styles.cartContent}>
        {cartData.length > 0 ? (
          cartData.map((data, index) => (
            <div className={styles.cartCard} key={index}>
              <Image
                className={styles.cartImg}
                src={data.image}
                alt="Image"
                width={100}
                height={100}
                priority
              />
              <div className={styles.cartContainInfo}>
                <h1>{data.name}</h1>
                <p>{data.price} ksh</p>
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
                  <div
                    className={styles.cardDelete}
                    onClick={() => DeleteCart(data.id)}
                  >
                    <DeleteTcon className={styles.cartDeleteIcon} height={24} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.cartEmpty}>
          <h1>Cart empty</h1>
          </div>
        )}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.cartFooterItem}>
          <div className={styles.cartItem}>
            <h1>Delivery Fee:</h1>
            <h2> {TotalDelivery} ksh</h2>
          </div>
          <div className={styles.cartItem}>
            <h1>Subtotal:</h1>
            <h2> {TotalPrice} ksh</h2>
          </div>
          <div className={styles.cartItem}>
            <h1>Total:</h1>
            <h2> {TotalPrice + TotalDelivery} ksh</h2>
          </div>
        </div>
        <button className={styles.checkOutBtn} onClick={() => checkOut()}>
          Checkout <CheckOutIcon className={styles.checkIcon} height={18} />
        </button>
        <span onClick={() => toggleCart()}>Continue shopping</span>
      </div>
    </div>
  );
}
