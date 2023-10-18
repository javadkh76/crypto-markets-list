import { ComponentType } from 'react'
import { Market } from '../../misc/types'
import { Card } from 'antd'

const MarketCard: ComponentType<Market> = (props: Market) => {
  return (
    <>
      <Card>{props.id}</Card>
    </>
  )
}
export default MarketCard
