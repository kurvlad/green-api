import { object, z } from 'zod';

export const loginFormSchema = object({
    login: z.string().min(1, 'Введите логин'),
    password: z.string().min(1, 'Введите пароль'),
});

export type LoginForm = z.infer<typeof loginFormSchema>;
