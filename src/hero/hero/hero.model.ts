import { Schema } from "mongoose";

export type HeroDocument = HeroModel & Document;

export class HeroModel {
    id: string;
    name: string;
    nickname: string;
}

export const HeroSchema = new Schema(
    {
        id: String,
        name: String,
        nickname: String
    },
    {
        timestamps: { createdAt: true, updatedAt: true },
        collection: 'heroes',
        toJSON: {
          transform: (_, ret): void => {
            delete ret.__v;
          },
        },
    }
);