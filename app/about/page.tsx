import { readFile, writeFile } from "../helpers/file-helpers";
import NumberOfHits from "../components/NumberOfHits";

type Data = {
  hits: number;
};

const dbLocalPath = "app/db/database.json";

const AboutPage = () => {
  const data: Data = JSON.parse(readFile(dbLocalPath));
  const { hits } = data;
  const nextDataValue = { hits: hits + 1 };
  writeFile(dbLocalPath, JSON.stringify(nextDataValue));
  return (
    <div>
      <h1>Welcome</h1>
      <NumberOfHits hits={nextDataValue.hits} />
    </div>
  );
};

export default AboutPage;
