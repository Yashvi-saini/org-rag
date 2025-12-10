import { z } from "zod";
import { noEmoji } from "./validators";

export const verifySchema = z.object({
  otp: z
    .string()
    .trim()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits")
    .regex(/^[0-9]+$/, "OTP must contain only numbers")
    .and(noEmoji),
});

export type VerifySchemaType = z.infer<typeof verifySchema>;
