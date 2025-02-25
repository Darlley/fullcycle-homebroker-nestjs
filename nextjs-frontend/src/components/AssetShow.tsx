import { Asset } from '@/types'
import Image from 'next/image'
import React from 'react'

type AssetShowProps = {
  asset: Asset
}

export default function AssetShow({ asset }: AssetShowProps) {
  return (
    <div className="flex space-x-1">
      <div className="content-center">
        <Image
          src={asset.image_url} 
          alt={asset.name} 
          width={30} 
          height={30}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold">{asset.name}</span>
        <span className="text-xs">{asset.symbol}</span>
      </div>
    </div>
  )
}
