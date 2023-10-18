export interface MarketState {
  data: Market[] | []
  status: 'idle' | 'loading' | 'failed'
  msg?: string
  action?: 'getMarkets'
}
type Currency = {
  id: number
  title: string
  title_fa: number
  code: string
  image: string
  decimal: number
  decimal_amount: number
  decimal_irt: number
  color: string
}
export type PriceInfo = {
  created_at: number
  price: string
  change: number
  min: string
  max: string
}
export type Market = {
  id: number
  title: string
  title_fa: string
  volume_24h: string
  currency1: Currency
  currency2: Currency
  price_info?: PriceInfo
  price: string
  tradable: boolean
  for_test: boolean
}
