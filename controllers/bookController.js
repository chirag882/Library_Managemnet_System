const Book = require("../models/bookModel");

// getAllBooks
exports.getAllBooks = async (req, res) => {
    try {
        const pg = req.query.page;
        const books = await Book.find({ page: pg });
        res.send(books);
    } catch (error) {
        console.log(error);
        res
          .status(500)
          .send({ message: "Cannot get books", success: false, error });
      }
};
