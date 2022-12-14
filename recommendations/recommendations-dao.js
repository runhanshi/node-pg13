import recommendationsModel from "./recommendations-model.js";

export const gourmetRecommendsRecipe = async (gid, rid, time) => {
    return await recommendationsModel.create({gourmet: gid, recipe: rid, time: time})
}
export const gourmetUnrecommendsRecipe = async(gid, rid) => {
    console.log("gourmetUnrecommendsRecipe!!!!!!")
    return await recommendationsModel.deleteMany({gourmet: gid, recipe: rid})
}

export const findGourmetWhoRecommendsRecipe = async(rid) => {
    return await recommendationsModel.find({recipe: rid}, {recipe: false})
        .populate('gourmet', '_id')
        .exec()
}

export const findMostRecentTenRecommendedRecipes = async() => {
    return await recommendationsModel.find()
        .sort({time: -1})
        .limit(8)
        .populate('recipe', ['_id', 'name', 'picture'])
        .exec();
}