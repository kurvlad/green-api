import { useLoginMutation } from '@app/api/queries/auth';
import { setLocalStorageItem } from '@app/app/localStorage/localStorage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@app/app/localStorage/localStorage.constants';
import { routerUrls } from '@app/app/router/router.urls';
import { Button } from '@app/common';
import { Input } from '@app/common/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './LoginPage.module.css';
import { type LoginForm, loginFormSchema } from './LoginPage.schema';

const LoginPage = () => {
    const navigate = useNavigate();

    const [isHowButtonHover, setIsHowButtonHover] = useState(false);
    const [isWhatButtonHover, setIsWhatButtonHover] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginFormSchema),
    });

    const { mutate: loginMutate, isPending: isLoginPending } = useLoginMutation({
        onSuccess: ({ data }) => {
            const { status, token, refresh_token } = data;

            if (status) {
                setLocalStorageItem(ACCESS_TOKEN, token);
                setLocalStorageItem(REFRESH_TOKEN, refresh_token);
                navigate(routerUrls.getHomePageUrl());
            }
        },
        onError: (error) => {
            const { status } = error;

            switch (status) {
                case 401:
                    toast.error('Ошибка авторизации, попробуйте снова');
                    break;
            }
        },
    });

    const onSubmit = (data: LoginForm) => {
        loginMutate({
            username: data.login,
            password: data.password,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form}>
            <h1 className={styles.form__title}>Вход в систему</h1>

            <span
                onMouseEnter={() => setIsHowButtonHover(true)}
                onMouseLeave={() => setIsHowButtonHover(false)}
                className={styles.help__title}
            >
                {isHowButtonHover ? 'Логин: Familiya.IO | Пароль: *******' : 'Как выглядит логин и пароль?'}
            </span>

            <Input
                {...register('login')}
                errorMessage={errors.login?.message}
                placeholder="Логин"
                required
                inputClassName={styles.input}
                autoComplete="username"
            />
            <Input
                {...register('password')}
                errorMessage={errors.password?.message}
                placeholder="Пароль"
                required
                inputClassName={styles.input}
                autoComplete="current-password"
                type="password"
            />

            <span
                onMouseEnter={() => setIsWhatButtonHover(true)}
                onMouseLeave={() => setIsWhatButtonHover(false)}
                className={styles.help__title}
            >
                {isWhatButtonHover
                    ? 'Необходимо обратиться в управление РГИТ'
                    : 'Что делать, если я не помню свой пароль?'}
            </span>

            <Button isLoading={isLoginPending} className={styles.login__button} type="submit">
                Войти
            </Button>
        </form>
    );
};

export default LoginPage;
