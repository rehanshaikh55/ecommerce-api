const Rating=require('../models/rating.model.js')
const productService=require('../services/product.services.js')


async function createRating(req,user){
    const product=await productService.findProductById(req.productId);
    const rating=new Rating({
        user:user._id,
        product:product._id,
        rating:req.rating,
        createdAt:new Date(),
    })
    return await rating.save()
}

async function getProductRating(productId){
    return await Rating.find({prodduct:productId})
}

module.exports={
    getProductRating,
    createRating
}