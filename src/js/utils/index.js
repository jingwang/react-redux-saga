import uuidv4 from "uuid";
export const generateNewUser = () => {
  return {
    id: uuidv4(),
    name: ""
  }
};