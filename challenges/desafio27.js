db.produtos.countDocuments({
nome: { $regex: /Mc/ },
});