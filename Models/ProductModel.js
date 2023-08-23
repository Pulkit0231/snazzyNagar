import mongoose from "mongoose";

const imageSchema = mongoose.Schema(

    {
        "id": {
            type: String,
        },
        "width": {
            type: Number,
        },
        "height": {
            type: Number,
        },
        "url": {
            type: String,
        },
        "filename": {
            type: String,
        },
        "size": {
            type: Number,
        },
        "type": {
            type: String,
        }
    }
)

const productScheam = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    colors: {
        type: [String],
        validate: {
            validator: function (v) {
                return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(v);
            },
            message: props => `${props.value} is not a valid code!`
        }
    },
    image: [imageSchema],
    reviews: {
        type: Number,
        require: true,
        default: 0
    },
    stars: {
        type: Number,
        require: true,
        default: 0
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    stock: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
    },
    featured: {
        type: Boolean,

    },
},
    {
        timestamps: true
    }
)
const Product = mongoose.model("Product", productScheam)

export default Product