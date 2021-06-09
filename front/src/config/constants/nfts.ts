import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

const Nfts: Nft[] = [
  {
    name: 'Diamond Drill',
    description: 'OIL farming on the Oil field bonus (+50% oil farming) : 120 hour.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
    previewImage: 'diamond-drill.png',
    blurImage: 'diamond-drill.png',
    sortOrder: 999,
    bunnyId: 0,
  },
  {
    name: 'Ruby Drill',
    description: "OIL farming on the Oil field bonus (+40% oil farming) : 60 hour",
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png',
    previewImage: 'ruby-drill.png',
    blurImage: 'ruby-drill.png',
    sortOrder: 999,
    bunnyId: 1,
  },
  {
    name: 'Golden drill',
    description: "OIL farming on the Oil field bonus (+20% oil farming) : 60 hour.",
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png',
    previewImage: 'golden-drill.png',
    blurImage: 'golden-drill.png',
    sortOrder: 999,
    bunnyId: 2,
  },
  {
    name: 'Titanium Oil Well',
    description: "Increase your current OIL farming speed (+300% oil farming): 12hour.",
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png',
    previewImage: 'titanium-oil-well.png',
    blurImage: 'titanium-oil-well.png',
    sortOrder: 999,
    bunnyId: 3,
  },
  {
    name: 'Carbon Fiber Oil Well',
    description: 'Increase your current OIL farming speed (+200% oil farming): 12hour.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png',
    previewImage: 'carbon-fiber-well.png',
    blurImage: 'carbon-fiber-well.png',
    sortOrder: 999,
    bunnyId: 4,
  },
  {
    name: 'Bronze Oil Well',
    description: 'Increase your current OIL farming speed (+100% oil farming): 12hour.',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png',
    previewImage: 'bronze-oil-well.png',
    blurImage: 'bronze-oil-well.png',
    sortOrder: 999,
    bunnyId: 4,
  },
]

export default Nfts
