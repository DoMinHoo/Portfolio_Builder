import mongoose from "mongoose";

const portfolioModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    skills: [{ type: String }],
    projects: [{ type: String }],

}, { timestamps: true });

export default mongoose.model("Protfolio", portfolioModel);