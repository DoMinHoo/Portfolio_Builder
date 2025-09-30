import mongoose, { Schema, Document, mongo } from "mongoose";

export interface IExperience {
    title: string;
    company: string;
    from?: Date;
    to?: Date | null;
    description?: string;
}

export interface IProfile extends Document {
    user: mongoose.Types.ObjectId;
    headline?: string;
    about?: string;
    skills?: string[];
    experience?: IExperience[];
    social?: Record<string, string>;
}

const ExperienceSchema = new Schema<IExperience>({
    title: { type: String, required: true },
    company: String,
    from: Date,
    to: Date,
    description: String,
});

const ProfileSchema = new Schema<IProfile>(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
        headline: { type: String },
        about: { type: String },
        skills: { type: [String], default: [] },
        experience: { type: [ExperienceSchema], default: [] },
        social: { type: Map, of: String }
    },
    {
        timestamps: true
    }
)

export default mongoose.model<IProfile>("Profile", ProfileSchema);

