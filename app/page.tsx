"use client";

import Image from "next/image";
import { IconSolverDepth } from "@consta/icons/IconSolverDepth";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { useReducer, useState } from "react";

type CheckboxProps = {
  label: string,
  value: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
/**
 * @typedef {Object} CheckboxProps
 * @property {string} label - Label text
 * @property {boolean} value - Initial checkbox value
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} onChange - Called when checkbox value changed
 */

/**
 * Renders a checkbox with label
 * @param {CheckboxProps} props
 * @returns {JSX.Element}
 */
const Checkbox = ({ label, value, onChange }: CheckboxProps): JSX.Element => {
  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default function Home() {
  const [isVisibility, toggleVisibility] = useReducer(prevValue => !prevValue, true);
  const [isDisplay, toggleDisplay] = useReducer(prevValue => !prevValue, true);
  const style = {
    display: isDisplay ? 'block':  'none',
    visibility: isVisibility ? 'visible' : 'hidden',
  }
  return (
    <Theme preset={presetGpnDefault}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div style={{display: 'grid'}}>
          <div style={style}>
            <IconSolverDepth/>
          </div>
          <IconSolverDepth/>
          <div style={{display: 'grid'}}>
            <Checkbox label="visible" value={isVisibility} onChange={toggleVisibility} />
            <Checkbox label="display" value={isDisplay} onChange={toggleDisplay} />
          </div>
        </div>
      </main>
    </Theme>
  );
}
