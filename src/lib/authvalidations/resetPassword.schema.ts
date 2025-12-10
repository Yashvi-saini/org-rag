import { z } from "zod";
import { noEmoji } from "./validators";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase character")
      .regex(/[a-z]/, "Password must contain at least one lowercase character")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .and(noEmoji),

    confirmPassword: z
      .string()
      .min(1, "Confirm Password is required")
      .max(20, "Password must be at most 20 characters")
      .and(noEmoji),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Both the passwords are not same.",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
