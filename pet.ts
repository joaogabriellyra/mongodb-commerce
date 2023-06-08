import { Schema, model, connect } from 'mongoose';
import { IPet } from './Ipet';

const petSchema = new Schema<IPet>({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: String, required: false },
    weight: { type: Number, required: true },
    dailyMealsNumber: { type: Number, required: true, min: 2, max: 5, }
})

const Pet = model<IPet>('Pet', petSchema)