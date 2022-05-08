const { resolve } = require("path");
import { BASE_URL } from "./common";

export const DATABASE_FOLDER_URL = resolve(BASE_URL, "./data");
export const DATABASE_DATA_URL = resolve(DATABASE_FOLDER_URL, "./database.json");
export const PROJECTS_URL = resolve(BASE_URL, "./projects");
export const FILES_URL = resolve(BASE_URL, "./files");
