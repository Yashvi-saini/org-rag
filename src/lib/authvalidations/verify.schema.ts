import { z } from "zod";

export const verifySchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits")
    .regex(/^[0-9]+$/, "OTP must contain only numbers"),
});

export type VerifySchemaType = z.infer<typeof verifySchema>;
