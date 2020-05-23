const should = require("should");
const sinon = require("sinon");
const bookController = require("..//../controllers/bookController");

describe("Book Controller Tests:", () => {
  describe("Post", () => {
    it("should not allow an empty book title on post", () => {
      const Book = function (book) {
        this.save = () => {};
      };

      const req = {
        body: {
          isbn: 10,
          publish_date: Date.now,
        },
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = bookController(Book);
      controller.post(req, res);

      res.status
        .calledWith(400)
        .should.equal(true, `Bad Status ${res.status.args[0][0]}`);
    });

    it("should be  save with book title on post", () => {
      const Book = function (book) {
        this.save = () => {};
      };

      const req = {
        body: {
          isbn: 10,
          book_title: "Node.Js Test",
          publish_date: "2019-05-12",
        },
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = bookController(Book);
      controller.post(req, res);
      res.status.calledWith(201).should.be.true();
    });
  });
});
