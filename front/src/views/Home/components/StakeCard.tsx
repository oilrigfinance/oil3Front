import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import CardValueString from './CardValueString'
import CardValueStringNormal from './CardValueStringNormal'

const StyledStakeCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background-color: #ffcf00;
`

const StakeCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()

  return (
    <StyledStakeCard>
      <CardBody>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
            <CardValueStringNormal value="Stake" prefix="$" decimals="-" fontSize="20px" color="#000000"/>
            <CardValueString value="OIL, BNB, BUSD, CAKE" prefix="$" decimals="-" fontSize="40px" color="#000000"/>
            <CardValueStringNormal value="in Pools" prefix="$" decimals="-" fontSize="20px" color="#000000"/>
          {/* </Heading> */}
        </>
      </CardBody>
    </StyledStakeCard>
  )
}

export default StakeCard