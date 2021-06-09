import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Oil field',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Oil deposit',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: 'NFT Boost',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Roadmap',
    icon: 'IfoIcon',
    href: 'https://google.es',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    href: 'https://google.es'
  },
]

export default config
