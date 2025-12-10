import { z } from "zod";
import { noEmoji } from "./validators";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .refine((val) => !/\p{Extended_Pictographic}/u.test(val), {
      message: "Emojis are not allowed",
    })
    .email("Please enter a valid email ID"),

  password: z
    .string()
    .min(1, "Password is required")
    .max(20, "Password must be at most 20 characters")
    .and(noEmoji),

  rememberMe: z.boolean().optional(),  // checkbox optional
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
