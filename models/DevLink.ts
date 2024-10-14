import mongoose from "mongoose";


const linkDetailSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    platFormName: { type: String, required: true },
    link: { type: String, required: true }
});

const devlinksSchema = new mongoose.Schema({
    links: [linkDetailSchema]
});


const DevLink = mongoose.models.dev_link || mongoose.model("dev_link", devlinksSchema);

export default DevLink;