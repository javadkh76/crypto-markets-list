import React, { useEffect } from 'react'
import { Market } from '../../misc/types'
import { Table } from 'antd'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  selectMarkets,
  updateMarket,
} from '../../features/markets/marketsSlice'
import { getMarkets } from '../../features/markets/marketsThunk'
import { ColumnsType } from 'antd/es/table'
import styles from './MarketsList.module.css'
import { socket } from '../../misc/socket'

const columns: ColumnsType<Market> = [
  {
    title: 'Coin name',
    render: (record) => {
      return (
        <div className={styles.coinName}>
          <img
            className={styles.coinIcon}
            src={record.currency1.image}
            alt={record.currency1.title}
          />
          <div>{record.title}</div>
        </div>
      )
    },
  },
  {
    title: 'Price',
    render: (record) => {
      return (+record.price).toLocaleString('en', {
        maximumFractionDigits: record.currency2.decimal,
      })
    },
  },
  {
    title: 'Change',
    render: (record) => {
      if (record.price_info)
        return (
          <span
            style={{
              color:
                record.price_info.change > 0
                  ? '#33ee33'
                  : record.price_info.change === 0
                  ? 'black'
                  : 'red',
            }}
          >
            {record.price_info.change} %
          </span>
        )
      return 0
    },
  },
  {
    title: '24H Vol',
    render: (record) => {
      return (+record.volume_24h).toLocaleString('en', {
        maximumFractionDigits: record.currency1.decimal_amount,
      })
    },
  },
]
const MarketsList = () => {
  const { data: markets, status, action } = useAppSelector(selectMarkets)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMarkets())
    socket.addEventListener('open', () => {
      socket.send('{"method": "sub_to_price_info"}')
    })
    socket.addEventListener('message', (event) => {
      if (event.data) {
        const changes = JSON.parse(event.data)
        dispatch(updateMarket(changes))
      }
    })
  }, [])

  return (
    <div>
      <Table
        columns={columns}
        dataSource={markets}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 540 }}
      />
    </div>
  )
}
export default MarketsList
