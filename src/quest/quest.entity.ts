import * as mongoose from 'mongoose';
import { QuestCategory } from 'src/enums/enums';

export const Quest = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: Object.values(QuestCategory),
    required: true,
  },
  addOn: { type: String, required: true },
  path: { type: String, required: true },
  userId: { type: String, required: true },
  activated: { type: Boolean, default: false },
});
