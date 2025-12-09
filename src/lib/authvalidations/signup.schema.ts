import { z } from "zod";

export const SignupSchema = z
  .object({
    // EMAIL
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email ID"),

    // USERNAME
    username: z
      .string()
      .min(1, "Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be under 20 characters"),

    // PASSWORD
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase character")
      .regex(/[a-z]/, "Password must contain at least one lowercase character")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),

    // CONFIRM PASSWORD
    confirmPassword: z.string().min(1, "Confirm Password is required"),

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
