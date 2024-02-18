const sendTokenResponse = (token, res) => {
  res.status(200).json(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
};

module.exports = { sendTokenResponse };
