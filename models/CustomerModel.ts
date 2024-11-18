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
const Customer = mongoose.models.Customer || mongoose.model("Customer",CustomerSchema);
export default Customer;