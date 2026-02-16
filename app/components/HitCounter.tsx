import { readFile, writeFile } from "../helpers/file-helpers";

const LOCAL_DB_PATH = "app/db/database.json";

type Data = {
  hits: number;
};

const HitCounter = () => {
  const data: Data = JSON.parse(readFile(LOCAL_DB_PATH));
  const { hits } = data;
  const nextDataValue = { hits: hits + 1 };
  writeFile(LOCAL_DB_PATH, JSON.stringify(nextDataValue));

  return nextDataValue.hits
};

export default HitCounter;
