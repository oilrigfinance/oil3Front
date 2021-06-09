// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text as UIKitText, ArrowForwardIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'

const StyledHowItWorks = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textSubtle};
  padding: 24px 0;
`

const Section = styled.div`
  margin-bottom: 24px;
`

const Icon = styled.div`
  text-align: center;
`

const Text = styled(UIKitText)`
  flex: 1;
  padding: 0 8px;
`

const Row = styled.div`
  align-items: start;
  display: flex;
  margin-bottom: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <Container>
      <StyledHowItWorks>
        <Section>
          <Heading id="how-it-works" color="secondary" size="lg" mb="16px">
            {TranslateString(632, 'How it works')}
          </Heading>
          <Row>
            <Icon>
              <ArrowForwardIcon />
            </Icon>
            <Text>
              {TranslateString(
                999,
                'You can buy NFT\'s on this page once the OilRig is live.',
              )}
            </Text>
          </Row>
          <Row>
            <Icon>
              <ArrowForwardIcon />
            </Icon>
            <Text>
              {TranslateString(999, 'When you acquire one NFT the bonus will be auto applied to the Oil Field or the Oil Deposit.')}
            </Text>
          </Row>
          <Row>
            <Icon>
              <ArrowForwardIcon />
            </Icon>
            <Text>
              {TranslateString(
                999,
                "The bonus only works one time per NFT acquired.",
              )}
            </Text>
          </Row>
          <Row>
            <Icon>
              <ArrowForwardIcon />
            </Icon>
            <Text>
              {TranslateString(
                999,
                "If you have more than one NFT with eligible bonus reward only the higher bonus NFT will apply, the rest of the NFT will be queued.",
              )}
            </Text>
          </Row>
        </Section>
      </StyledHowItWorks>
    </Container>
  )
}

export default HowItWorks
