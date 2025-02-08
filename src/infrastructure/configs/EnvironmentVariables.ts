import dotenv from "dotenv";
dotenv.config();

export default {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  BAN_JOB: {
    CRON_TIME: process.env.BAN_JOB_CRON_TIME,
    WAITING_TIME: process.env.BAN_JOB_WAITING_TIME,
  },
};
