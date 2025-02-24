import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WalletDocumentType = HydratedDocument<Wallet>

@Schema()
export class Wallet {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  createdAt!: Date;
  updatedAt!: Date;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet)
