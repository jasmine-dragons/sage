const sendTokenResponse = (token, res) => {
  console.log(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
  res.status(200).json(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
};

module.exports = { sendTokenResponse };
