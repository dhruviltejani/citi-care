import mongoose, { models, model, Schema } from "mongoose";

enum ComplaintStatus {
    PENDING = "pending",
    IN_PROGRESS = "in_progress",
    RESOLVED = "resolved",
}

enum ComplaintCategory {
    ROAD = "road",
    GARBAGE = "garbage",
    WATER = "water",
    ELECTRICITY = "electricity",
    DRAINAGE = "drainage",
    STREET_LIGHT = "street_light",
    SEWAGE = "sewage",
    OTHER = "other",
}

const ComplaintSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
            enum: Object.values(ComplaintCategory),
        },

        status: {
            type: String,
            enum: Object.values(ComplaintStatus),
            default: ComplaintStatus.PENDING,
        },

        location: {
            address: { type: String, required: true },
            city: { type: String },
            state: { type: String },
            pincode: { type: String },
            coordinates: {
                lat: Number,
                lng: Number,
            },
        },

        images: [
            {
                type: String,
            },
        ],

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        assignedTo: {
            type: String,
        },

        resolvedAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

const Complaint =
    models.Complaint || model("Complaint", ComplaintSchema);

export default Complaint;