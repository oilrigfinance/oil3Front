import React, { useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Heading,
  Tag,
  Button,
  ChevronUpIcon,
  ChevronDownIcon,
  Text,
  CardFooter,
  useModal,
} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { Nft } from 'config/constants/types'
import InfoRow from '../InfoRow'
import Image from '../Image'
import { NftProviderContext } from '../../contexts/NftProvider'
import { getPancakeRabbitContract } from '../../utils/contracts'
import ClaimNftModal from '../ClaimNftModal'
import BurnNftModal from '../BurnNftModal'
import TransferNftModal from '../TransferNftModal'

interface NftCardProps {
  nft: Nft
}

const Header = styled(InfoRow)`
  min-height: 28px;
`

const DetailsButton = styled(Button).attrs({ variant: 'text', fullWidth: true })`
  height: auto;
  padding: 16px 24px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }

  &:focus:not(:active) {
    box-shadow: none;
  }
`

const InfoBlock = styled.div`
  padding: 0px;
`

const Value = styled(Text)`
  font-weight: 600;
`

const NftCard: React.FC<NftCardProps> = ({ nft }) => {
  const [state, setState] = useState({
    isLoading: false,
    isOpen: false,
    bunnyCount: 0,
    bunnyBurnCount: 0,
  })
  const TranslateString = useI18n()
  const {
    isInitialized,
    canClaim,
    hasClaimed,
    canBurnNft,
    totalSupplyDistributed,
    currentDistributedSupply,
    getTokenIds,
    reInitialize,
  } = useContext(NftProviderContext)
  const walletCanClaim = canClaim && !hasClaimed
  const { bunnyId, name, previewImage, originalImage, description } = nft
  const tokenIds = getTokenIds(bunnyId)
  const isSupplyAvailable = currentDistributedSupply < totalSupplyDistributed
  const walletOwnsNft = tokenIds && tokenIds.length > 0
  const Icon = state.isOpen ? ChevronUpIcon : ChevronDownIcon

  const fetchDetails = useCallback(async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }))
    try {
      const { methods } = getPancakeRabbitContract()
      const bunnyCount = await methods.bunnyCount(bunnyId).call()
      const bunnyBurnCount = await methods.bunnyBurnCount(bunnyId).call()

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isDataFetched: true,
        bunnyCount: parseInt(bunnyCount, 10),
        bunnyBurnCount: parseInt(bunnyBurnCount, 10),
      }))
    } catch (error) {
      console.error(error)
    }
  }, [bunnyId])

  const handleClick = async () => {
    if (state.isOpen) {
      setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }))
    } else {
      try {
        await fetchDetails()
      } catch (error) {
        console.error(error)
      } finally {
        setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }))
      }
    }
  }

  const handleSuccess = () => {
    fetchDetails()
    reInitialize()
  }

  const [onPresentClaimModal] = useModal(<ClaimNftModal nft={nft} onSuccess={handleSuccess} />)
  const [onPresentBurnModal] = useModal(<BurnNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />)
  const [onPresentTransferModal] = useModal(
    <TransferNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />,
  )

  return (
    <Card isActive={walletOwnsNft}>
      <Image src={`/images/nfts/${previewImage}`} alt={name} originalLink={walletOwnsNft ? originalImage : null} />
      <CardBody>
        <Header>
          <Heading mb="16px" color="#ffcf00">{name}</Heading>
          {isInitialized && walletCanClaim && (
            <Tag outline variant="success">
              {TranslateString(526, 'Available')}
            </Tag>
          )}
          {isInitialized && tokenIds && (
            <Tag outline variant="secondary">
              {TranslateString(999, 'In Wallet')}
            </Tag>
          )}
        </Header>
        {isInitialized && walletOwnsNft && (
          <Button fullWidth variant="secondary" mt="24px" onClick={onPresentTransferModal}>
            {TranslateString(999, 'Transfer')}
          </Button>
        )}
        {isInitialized && walletCanClaim && isSupplyAvailable && (
          <Button fullWidth onClick={onPresentClaimModal} mt="24px">
            {TranslateString(999, 'Claim this NFT')}
          </Button>
        )}
        {isInitialized && canBurnNft && walletOwnsNft && (
          <Button variant="danger" fullWidth onClick={onPresentBurnModal} mt="24px">
            {TranslateString(999, 'Trade in for CAKE')}
          </Button>
        )}
        <InfoBlock>
          <Text as="p" color="textSubtle" mb="16px" style={{ textAlign: 'left' }}>
            {description}
          </Text>
          <InfoRow>
            <Text>{TranslateString(999, 'NFT value')}:</Text>
            <Value color="#ffcf00">- OIL</Value>
          </InfoRow>
          <InfoRow>
            <Text>{TranslateString(999, 'Number minted')}:</Text>
            <Value color="#ffcf00">0</Value>
          </InfoRow>
          <InfoRow>
            <Text>{TranslateString(999, 'Number burned')}:</Text>
            <Value color="#ffcf00">0</Value>
          </InfoRow>
        </InfoBlock>
      </CardBody>
      <CardFooter p="0">
        <DetailsButton>Coming soon</DetailsButton>
      </CardFooter>
    </Card>
  )
}

export default NftCard
