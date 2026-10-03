import "dotenv/config";
import { z } from "zod";

const EnvSchema = z.object({
  ANTHROPIC_API_KEY: z
    .string()
    .startsWith("sk-ant-", "Anthropic API key must start with 'sk-ant-'"),
  MODEL: z.string().default("claude-haiku-4-5-20251001"),
});

export const env = EnvSchema.parse(process.env);
