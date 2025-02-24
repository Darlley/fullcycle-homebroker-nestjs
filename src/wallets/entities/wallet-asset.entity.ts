import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Wallet, WalletDocumentType, WalletSchema } from './wallet.entity';
import { Asset, AssetDocumentType } from 'src/assets/entities/asset.entity';

export type WalletAssetDocumentType = HydratedDocument<WalletAsset>;

@Schema()
export class WalletAsset {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop({ type: mongoose.Schema.Types.Int32 })
  shares: number;

  @Prop({ type: String, ref: Wallet.name })
  wallet: WalletDocumentType | string;

  @Prop({ type: String, ref: Asset.name })
  asset: AssetDocumentType | string;

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletAssetSchema = SchemaFactory.createForClass(WalletAsset);

WalletSchema.index({ wallet: 1, asset: 1 }, { unique: true });
