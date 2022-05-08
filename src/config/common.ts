const { existsSync } = require("fs");
const { resolve } = require("path");
export const DRIVE_URL = "D://";
export const PROGRAM_URL = "/mtoolsCache";
export const BASE_URL = existsSync(DRIVE_URL)
  ? resolve(DRIVE_URL, PROGRAM_URL)
  : resolve("C://", PROGRAM_URL);
