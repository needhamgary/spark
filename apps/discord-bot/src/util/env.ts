import { load } from 'ts-dotenv';

export const env = load({
  DISCORD_TOKEN: String,
  CLIENT_ID: String,
});
