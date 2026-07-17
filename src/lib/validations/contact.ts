import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(60, "Name is too long"),
  email: z.email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^\+?[\d\s()-]+$/, "Only digits, spaces and + - ( ) are allowed"),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(1000, "Message is too long"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
