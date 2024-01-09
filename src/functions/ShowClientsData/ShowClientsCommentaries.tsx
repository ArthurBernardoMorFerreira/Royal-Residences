import { ClientsCommentary } from "../../assets/Image/ImagesData/ClientsImages"
import { useChangeClientsImage } from "../../store/ChangeClientsImage";

function ShowEachClientsCommentaries() {
  const { count } = useChangeClientsImage();
  
  let result;

  switch(count) {
    case 1:
      result = ClientsCommentary.ClientsCommentary1
    break;
    case 2:
      result = ClientsCommentary.ClientsCommentary2
    break;
    case 3:
      result = ClientsCommentary.ClientsCommentary3
    break;
  }

  count > 3 ? result = ClientsCommentary.ClientsCommentary1 : result;
  count < 1 ? result = ClientsCommentary.ClientsCommentary3 : result;

  return result;
}

export default ShowEachClientsCommentaries