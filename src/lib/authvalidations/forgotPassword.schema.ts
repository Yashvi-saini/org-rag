import { z } from "zod";
import { noEmoji } from "./validators";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")       
    .refine((val) => !/\p{Extended_Pictographic}/u.test(val), {
      message: "Emojis are not allowed",
    })
    .email("Enter a valid Email"),
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
