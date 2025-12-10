import { z } from "zod";

export const noEmoji = z
  .string()
  .refine((val) => !/\p{Extended_Pictographic}/u.test(val), {
    message: "Emojis are not allowed",
  });
