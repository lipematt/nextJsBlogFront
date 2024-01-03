import React from 'react';
import Image from 'next/image';
import styles from '../src/styles/FeaturedSection.module.css';

const FeaturedSection = () => {
  return (
    <section className={`${styles.section} roundedDefault shadowDefault p-8`}>
      <div className={`${styles.overlay} roundedDefault`}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Tecnologia &amp; 
            </h1>
            <div className={styles.titleBackground}></div>
          </div>
          <br />
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>
              Negócios
            </h2>
            <div className={styles.titleBackground}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;