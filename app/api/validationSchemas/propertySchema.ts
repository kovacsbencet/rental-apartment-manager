import { z } from 'zod';

export const propertySchema = z.object({
    city: z.string(),
    district: z.string(),
    street: z.string(),
    number: z.number(),
    stairwell: z.number(),
    floor: z.number(),
    apartment: z.number(),
    rent: z.number(),
})