import { Sketch } from '@uiw/react-color';
import React, { useState } from 'react';
import { Card, CardActionArea, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
export default function ColorPicker() {
  const [hex, setHex] = useState('');
  return (
    <CssBaseline>
      <div className="colorArea">
        <h2>Hex: {hex}</h2>
        <Card style={{ marginLeft: '10em', alignText: 'center' }}>
          <CardActionArea>
            <Sketch
              color={hex}
              onChange={(color) => setHex(color.hex)}
            ></Sketch>
          </CardActionArea>
        </Card>
        <Link
          style={{
            display: 'block',
            margin: '1rem  0',
          }}
          to={'/about'}
        >
          About this project
        </Link>
      </div>
    </CssBaseline>
  );
}
