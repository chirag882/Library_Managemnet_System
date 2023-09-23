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

// getBooksByGenre
exports.getBooksByGenre = async (req, res) => {
  try {
    const gen = req.query.genre;
    const books = await Book.find({genre:gen})
    res.send(books);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Cannot get books", success: false, error });
  }
};

// decreaseBook
exports.decreaseBook = async (req, res) => {
  try {
    const id = req.query.id;
    await Book.findByIdAndUpdate({id:id},{
      $inc: {
        stock: -1
      }
    }, {
      upsert: false
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Cannot get books", success: false, error });
  }
};