const healthController = (req, res) => {
  return res.send({
    status: true,
    message: 'I am OK!',
    data: {},
  });
};

export default healthController;
