import { Sketch } from '@uiw/react-color';
import React, { useState } from 'react';

export default function ColorPicker() {
  const [hex, setHex] = useState('');
  return (
    <div className="colorArea">
      <h2>Hex: {hex}</h2>
      <Sketch color={hex} onChange={(color) => setHex(color.hex)}></Sketch>
    </div>
  );
}
