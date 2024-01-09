import { FullNameClients } from "../../assets/Image/ImagesData/ClientsImages"

import { useChangeClientsImage } from "../../store/ChangeClientsImage"

function ShowEachClientFullName() {
  const { count } = useChangeClientsImage();
  
  let result;

  switch(count) {
    case 1:
      result = FullNameClients.FullName1
      break;
    case 2:
      result = FullNameClients.FullName2
      break;
    case 3:
      result = FullNameClients.FullName3
      break;
  }

  count > 3 ? result = FullNameClients.FullName1 : result;
  count < 1 ? result = FullNameClients.FullName3 : result;

  return result;
}

export default ShowEachClientFullName