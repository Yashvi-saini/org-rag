import { z } from "zod";
import { noEmoji } from "./validators";

export const SignupSchema = z
  .object({
    // EMAIL
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .refine((val) => !/\p{Extended_Pictographic}/u.test(val), {
        message: "Emojis are not allowed",
      })
      .email("Please enter a valid email ID"),

    // USERNAME
    username: z
      .string()
      .trim()
      .min(1, "Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username must be under 30 characters")
      .regex(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, hyphens, and underscores")
      .and(noEmoji),

    // PASSWORD
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

    // CONFIRM PASSWORD
    confirmPassword: z
      .string()
      .min(1, "Confirm Password is required")
      .max(20, "Password must be at most 20 characters")
      .and(noEmoji),

    // TERMS CHECKBOX
    agree: z
      .boolean()
      .refine((val) => val === true, {
        message: "You must agree with the Terms and Policy",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Both the passwords are not same.",
    path: ["confirmPassword"],
  });

export type SignupSchemaType = z.infer<typeof SignupSchema>;
