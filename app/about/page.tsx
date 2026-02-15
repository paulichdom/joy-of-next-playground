import { readFile, writeFile } from "../helpers/file-helpers";

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
      <p>You are visitor number {nextDataValue.hits}</p>
    </div>
  );
};

export default AboutPage;
