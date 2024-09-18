const mongoose = require("mongoose");

const schema = mongoose.Schema;

const produitSchema = schema({
  name: {
    type: String,
    required: [true, "Le nom est requis !"],
    minLength: [2, "Le nom est trop court ! "],
  },
  description: {
    type: String,
    required: [true, "La description est requises !"],
    minLength: [4, "La description est trop courtes ! "],
  },
  image: {
    type: String,
    required: [true, "L'url de l'image est requise !"],
  },
  price: {
    type: Number,
    required: [true, "Le prix est requis !"],
    min: [0, "Le prix ne peut pas être négatif !"],
  },
});

const Produit = mongoose.model("produit", produitSchema);

module.exports = Produit;
