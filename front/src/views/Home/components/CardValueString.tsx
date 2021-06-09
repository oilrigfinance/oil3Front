import React, { useEffect, useRef } from 'react'
import { Text } from '@pancakeswap-libs/uikit'

interface CardValueStringProps {
  value: string
  decimals?: string
  fontSize?: string
  prefix?: string
  color?: string
}

const CardValueString: React.FC<CardValueStringProps> = ({ value, decimals, fontSize, prefix, color }) => {
  return (
    <Text color={color} bold fontSize={fontSize}>
      {value}
    </Text>
  )
}

export default CardValueString
