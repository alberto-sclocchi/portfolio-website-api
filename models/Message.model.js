const { model, Schema } = require("mongoose");

const userSchema = new Schema(
    {
        firstName: {
            type: String
        }, 
        lastName: {
            type: String
        },
        email: {
            type: String
        },
        number: {
            type: String
        },
        subject: {
            type: String
        },
        message: {
            type: String
        },
    },
    {
        timestamps: true 
    }
)

const Message = model("Message", userSchema);

module.exports = Message;