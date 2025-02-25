import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { WalletAssetDocumentType } from './wallet-asset.entity';

export type WalletDocumentType = HydratedDocument<Wallet>

@Schema()
export class Wallet {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop({ 
    type: [mongoose.Schema.Types.String],
    set: (v) => [...new Set(v)],
    ref: 'WalletAsset'
  })
  assets: WalletAssetDocumentType[] | string[];

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet)
