'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Header.module.css';
import { MaxWidthWrapper } from '../MaxWidthWrapper/MaxWidthWrapper';
import Link from 'next/link';

function Header() {
  const id = React.useId();

  // TODO: Global state?
  const soundEnabled = true;

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper
        className={styles.innerWrapper}
      >
        <Link href="/">Kool Website</Link>

        <button
          onClick={() => {
            // TODO: flip `soundEnabled`
          }}
        >
          {soundEnabled ? (
            <Volume2 />
          ) : (
            <VolumeX />
          )}
          <VisuallyHidden>
            {soundEnabled
              ? 'Disable sound effects'
              : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;