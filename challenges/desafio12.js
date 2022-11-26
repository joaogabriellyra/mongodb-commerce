db.produtos.updateMany(
    {
        nome: { $ne: "McChicken" },
    },
    {
       $set: ingredientes.push("Catchup"),        
    },
);
db.produtos.find({

}, {
    nome: 1,
    _id: 0,
});