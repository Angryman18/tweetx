import getConfig from "next/config";
import { type NextConfig } from "next";

const getNextConfig: NextConfig = getConfig();

type Config = {
  MONGO_URI: string;
  JWT_SECRET: string;
};

const config = getNextConfig.publicRuntimeConfig;
export default config as Config;
