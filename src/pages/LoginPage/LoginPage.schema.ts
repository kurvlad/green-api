import { object, z } from 'zod';

export const loginFormSchema = object({
    idInstance: z.string().min(1, 'Введите idInstance').regex(/^\d+$/, 'idInstance должен состоять только из цифр'),
    apiTokenInstance: z.string().min(1, 'Введите apiTokenInstance'),
});

export type LoginForm = z.infer<typeof loginFormSchema>;
