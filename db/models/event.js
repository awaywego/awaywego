const mongoose = require('mongoose');
const db = require('../config.js');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: false},
  planId: {type: Schema.ObjectId, ref: 'Plan', required: true },
  startTime: {type: String, required: false},
  endTime: {type: String, required: false},
  status: {type: String, required: true},
  upVotes: [{type: Schema.ObjectId, ref: 'User'}],
  downVotes: [{type: Schema.ObjectId, ref: 'User'}],
  imageUrl: { type: String, default: 'https://i.pinimg.com/736x/fe/1f/3f/fe1f3fb578749b1ab731966d33f1104e--awkward-engagement-photos-hilarious-photos.jpg' },
  tags: [String],
}, {timestamps: true});

var PlanEvent = mongoose.model('PlanEvent', eventSchema);
module.exports = PlanEvent;
