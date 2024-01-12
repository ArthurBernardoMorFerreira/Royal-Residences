enum FullNameClients {
  FullName1 = 'Bessie Cooper',
  FullName2 = 'Kathryn Murphy',
  FullName3 = 'Robert Fox',
}

enum ClientsImageURL {
  ClientImageURL1 = './public/img/Clients/Pexels Photo by Daniel Xavier.png',
  ClientImageURL2 = './public/img/Clients/Pexels Photo by Andrea Piacquadio.png',
  ClientImageURL3 = './public/img/Clients/Pexels Photo by The Lazy Artist Gallery.png',
}

enum ClientsCommentary {
  ClientsCommentary1 = '“The staff was so welcoming and accommodating, and the accommodations themselves were absolutely stunning.”',
  ClientsCommentary2 = '“Thank you, Royal Residences, for making my dream of owning a beautiful mansion come true! Your team was so attentive and helped me every step of the way. The process was seamless and stress-free.”',
  ClientsCommentary3 = '“I am absolutely delighted with the service provided by Royal Residences. The team went above and beyond to ensure that my mansion was fully equipped and ready to move in.”',
}

const ClientIsTheMainOne = {
  IsClient1TheMainOne: false,
  IsClient2TheMainOne: true,
  IsClient3TheMainOne: false,
}

export {
  FullNameClients,
  ClientsImageURL,
  ClientsCommentary,
  ClientIsTheMainOne,
}