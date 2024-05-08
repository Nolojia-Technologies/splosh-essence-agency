"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { useState, useRef } from "react";
import Loader from "@/app/components/Loader";
import styles from "@/app/style/join.module.css";
import {
  CameraIcon,
  UserIcon,
  PhoneIcon,
  KeyIcon as PasswordIcon,
  EnvelopeIcon as EmailIcon, 
  MapPinIcon as LocationIcon,
  EyeIcon as ShowPasswordIcon,
  EyeSlashIcon as HidePasswordIcon,
  BuildingStorefrontIcon as StoreIcon,
} from "@heroicons/react/24/outline";

const FileInput = ({ onChange, idImage }) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.formChangeUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <div className={styles.AdsSection}>
        {idImage === null ? (
          <div className={styles.uploadCameraIcon} onClick={handleIconClick}>
            <CameraIcon
              className={styles.CameraIcon}
              alt="Camera Icon"
              width={30}
              height={30}
            />
          </div>
        ) : (
          <Image
            src={idImage}
            alt="Id Image"
            className={styles.IdImage}
            layout="fill"
            quality={100}
            objectFit="cover"
            priority
          />
        )}
      </div>
    </div>
  );
};

export default function EditBusiness() {
  const [imageUrls, setImageUrls] = useState([null, null]);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success("onboarded succesfully");
    } catch (error) {
      console.error(error);
      toast.error("onboarding failed");
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      const newImageUrls = [...imageUrls];
      newImageUrls[index] = imageUrl;
      setImageUrls(newImageUrls);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <button type="submit" disabled={isLoading} className={styles.formbtn}>
          {isLoading ? <Loader /> : "Edit Business "}
        </button>
      </div>
      <div className={styles.formContainerInner}>
        <div className={styles.ContainSide}>
          {/* username */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Name </label>
            <div className={styles.formInput}>
              <UserIcon
                className={styles.formInputIcon}
                alt="user icon"
                width={24}
                height={24}
              />
              <input type="text" name="user" id="user" placeholder="Penguin" />
            </div>
          </div>
          {/* Contact */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Contact </label>
            <div className={styles.formInput}>
              <PhoneIcon
                className={styles.formInputIcon}
                alt="contact icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="+1(484)744-0421"
              />
            </div>
          </div>
          {/* location */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Location </label>
            <div className={styles.formInput}>
              <LocationIcon
                className={styles.formInputIcon}
                alt="location icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Los angles, 044"
              />
            </div>
          </div>
          {/* Email */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Email </label>
            <div className={styles.formInput}>
              <EmailIcon
                className={styles.formInputIcon}
                alt="email icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Penguin@gmail.com"
              />
            </div>
          </div>
            {/*  password */}

            <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Password </label>
            <div className={styles.formInput}>
              <PasswordIcon
              className={styles.formInputIcon}
              alt="password icon"
              width={20}
              height={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              id="Password"
              placeholder="Password"
            />
            <div
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <HidePasswordIcon
                  className={styles.formInputIcon}
                  width={20}
                  height={20}
                />
              ) : (
                <ShowPasswordIcon
                  className={styles.formInputIcon}
                  width={20}
                  height={20}
                />
              )}
            </div>
          </div>
          </div>
           
        </div>
        <div className={styles.ContainSideTwo}>
           {/*  confirm password */}

           <div className={styles.formInputContainer}>
            <label className={styles.formLabel}> confirm password  </label>
            <div className={styles.formInput}>
              <PasswordIcon
              className={styles.formInputIcon}
              alt="password icon"
              width={20}
              height={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="ConfirmPassword"
              id="Password"
              placeholder="Password"
            />
            <div
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <HidePasswordIcon
                  className={styles.formInputIcon}
                  width={20}
                  height={20}
                />
              ) : (
                <ShowPasswordIcon
                  className={styles.formInputIcon}
                  width={20}
                  height={20}
                />
              )}
            </div>
          </div>
          </div>
            {/* Store logan */}
            <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Store slogan </label>
            <div className={styles.formInput}>
              <StoreIcon
                className={styles.formInputIcon}
                alt="user icon"
                width={24}
                height={24}
              />
              <input type="text" name="user" id="user" placeholder="Penguin enterprise" />
            </div>
          </div>
              {/* Store Name */}
              <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Store Name </label>
            <div className={styles.formInput}>
              <StoreIcon
                className={styles.formInputIcon}
                alt="user icon"
                width={24}
                height={24}
              />
              <input type="text" name="user" id="user" placeholder="Penguin enterprise" />
            </div>
          </div>
              {/* Store type */}
              <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Store type</label>
            <div className={styles.formInput}>
              <StoreIcon
                className={styles.formInputIcon}
                alt="user icon"
                width={24}
                height={24}
              />
              <input type="text" name="user" id="user" placeholder="Restaurant" />
            </div>
          </div>
          {/* Contact */}
          <div className={styles.ContainSideInner}>
            {[1].map((index) => (
              <div key={index} className={styles.SideInner}>
                <label className={styles.formLabel}>
                Business image
                </label>
                <FileInput
                  onChange={(e) => handleImageUpload(e, index - 1)}
                  idImage={imageUrls[index - 1]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
