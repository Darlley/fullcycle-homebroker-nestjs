import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Asset, AssetDocumentType } from 'src/assets/entities/asset.entity';
import { Wallet, WalletDocumentType } from 'src/wallets/entities/wallet.entity';

export type OrderDocumentType = HydratedDocument<Order>;

export enum OrderType {
  BUY = 'BUY',
  SELL = 'SELL'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  FAILED = 'FAILED'
}

@Schema()
export class Order {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop({ type: mongoose.Schema.Types.Int32 })
  shares: number;
  
  @Prop({ type: mongoose.Schema.Types.Int32 })
  partial: number;
  
  @Prop()
  price: number;

  @Prop({ type: String, ref: Wallet.name })
  wallet: WalletDocumentType | string;

  @Prop({ type: String, ref: Asset.name })
  asset: AssetDocumentType | string;

  @Prop()
  type: OrderType
  
  @Prop()
  status: OrderStatus;

  createdAt!: Date;
  updatedAt!: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);