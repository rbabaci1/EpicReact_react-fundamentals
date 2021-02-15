// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style, ...otherProps}) => {
  return (
    <div
      className={`box ${size ? `box--${size}` : ''}`}
      style={{...style, fontStyle: 'italic'}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{background: 'lightblue'}}>
    small lightblue box
  </Box>
)

const mediumBox = (
  <Box size="medium" style={{background: 'pink'}}>
    medium pink box
  </Box>
)

const largeBox = (
  <Box size="large" style={{background: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
