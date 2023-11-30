function status(request, response) {
  response.status(200).json({ chave: "vc vai chegar onde quer!" });
}

export default status;
