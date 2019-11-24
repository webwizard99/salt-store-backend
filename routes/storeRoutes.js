module.exports = (app) => {
  app.get('/store/items/:page/:count', (req, res) => {
    const page = req.params.page;
    const count = req.params.count;

    console.log(page, count);
  });
}