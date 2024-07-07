import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navigationLinks: {
  label: string,
  link: string,
}[] = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/Aboutus" },
    { label: "Members", link: "/Members" },
    { label: "Recruit", link: "/Recruit" }
  ];

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="./ECmark.png" alt="EC mark" className={styles.ECmark} />
      </Link>
      <nav>
        <ul className={styles.navList}>
          {navigationLinks.map(({ label, link }) => (
            <li key={label}>
              <Link href={link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header >
  )
}