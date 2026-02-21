import { promises as fs } from "fs";
import path from "path";
import { DbData } from "@/types";
export async function getDbData(): Promise<DbData> {
  const fallbackData: DbData = {
    articles: [],
    spots: [],
  };

  try {
    const jsonPath = path.join(process.cwd(), "db.json");
    const file = await fs.readFile(jsonPath, "utf8");
    const data = JSON.parse(file);
    return data as DbData;
  } catch (error) {
    console.error("Error reading local database:", error);
    return fallbackData;
  }
}
