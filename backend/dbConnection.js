module.exports = function(mongoose) {

    const URI = "mongodb://localhost/favorite_authors";

    mongoose.connect(URI, {useNewUrlParser: true}, 
        err => console.log("db connections", err)
    );
}