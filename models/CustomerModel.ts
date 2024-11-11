import mongoose , {Schema} from "mongoose";
const CustomerSchema = new Schema(
    {
        url: String , 
        alt_description: String
    },
    {
        timestamps : true
    }
)
const Customer = mongoose.models.Post || mongoose.model("Customer",CustomerSchema);
export default Customer;