import React from 'react'
import DataTable from '@/components/DataTable'

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="w-14 h-14 bg-gray-300 rounded-full animate-pulse" />
        <div className="info">
          <div className="w-32 h-4 bg-gray-300 rounded animate-pulse mb-2" />
          <div className="w-24 h-6 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export const TrendingCoinsFallback = () => {
  const skeletonColumns = [
    { 
      header: 'Name', 
      cell: () => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-300 rounded-full animate-pulse" />
          <div className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
        </div>
      )
    },
    { 
      header: '24h Change', 
      cell: () => <div className="w-16 h-4 bg-gray-300 rounded animate-pulse" />
    },
    { 
      header: 'Price', 
      cell: () => <div className="w-20 h-4 bg-gray-300 rounded animate-pulse" />
    },
  ]

  const skeletonData = Array(3).fill({})

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <DataTable
        data={skeletonData}
        columns={skeletonColumns}
        rowKey={(_, index) => `skeleton-${index}`}
        tableClassName="trending-coins-table"
      />
    </div>
  )
}