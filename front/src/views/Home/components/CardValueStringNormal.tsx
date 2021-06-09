import React, { useEffect, useRef } from 'react'
import { Text } from '@pancakeswap-libs/uikit'

interface CardValueStringNormalProps {
  value: string
  decimals?: string
  fontSize?: string
  prefix?: string
  color?: string
}

const CardValueStringNormal: React.FC<CardValueStringNormalProps> = ({ value, decimals, fontSize, prefix, color }) => {
  return (
    <Text color={color} fontSize={fontSize}>
      {value}
    </Text>
  )
}

export default CardValueStringNormal
