"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Header.module.css";
import { MaxWidthWrapper } from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import { useSoundContext } from "@/app/providers/SoundProvider";
import { ComponentKey, components } from "..";
import { useComponentContext } from "@/app/providers/ComponentProvider";

function Header() {
  const id = React.useId();
  const { soundEnabled, setSoundEnabled } = useSoundContext();
  const {selectedComponent, setSelectedComponent} = useComponentContext()

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <Link href="/">Kool Website</Link>

        <button
          onClick={() => setSoundEnabled((soundEnabled) => !soundEnabled)}
        >
          {soundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundEnabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
        <select
          id="component-selector"
          value={selectedComponent}
          onChange={(event) =>
            setSelectedComponent(event.target.value as ComponentKey)
          }
        >
          {Object.entries(components).map(([key, { name }]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
