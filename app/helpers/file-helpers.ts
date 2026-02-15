import fs from "fs";
import path from "path";

export const readFile = (localPath: string): string => {
  return fs.readFileSync(path.join(process.cwd(), localPath), "utf-8");
};

export const writeFile = (localPath: string, content: string) => {
  return fs.writeFileSync(path.join(process.cwd(), localPath), content, {
    encoding: "utf-8",
  });
};
