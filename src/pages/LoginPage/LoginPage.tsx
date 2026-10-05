import { apiClient } from '@app/api/apiClient';
import { endpoints } from '@app/api/greenApi.constants';
import { setLocalStorageItem } from '@app/app/localStorage/localStorage';
import { API_TOKEN_INSTANCE, ID_INSTANCE } from '@app/app/localStorage/localStorage.constants';
import { routerUrls } from '@app/app/router/router.urls';
import { Button } from '@app/common';
import { Input } from '@app/common/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styles from './LoginPage.module.css';
import { type LoginForm, loginFormSchema } from './LoginPage.schema';

const LoginPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginFormSchema),
    });

    const { mutate: checkCredentials, isPending } = useMutation({
        mutationFn: async (data: LoginForm) => {
            const { data: settings } = await apiClient.get(
                endpoints.getSettings(data.idInstance, data.apiTokenInstance)
            );

            return settings;
        },
        onSuccess: (_, variables) => {
            setLocalStorageItem(ID_INSTANCE, variables.idInstance);
            setLocalStorageItem(API_TOKEN_INSTANCE, variables.apiTokenInstance);
            navigate(routerUrls.getHomePageUrl());
        },
    });

    const onSubmit = (data: LoginForm) => {
        checkCredentials(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form}>
            <h1 className={styles.form__title}>Вход в GREEN-API</h1>

            <span className={styles.help__title}>Данные находятся в личном кабинете GREEN-API</span>

            <Input
                {...register('idInstance')}
                errorMessage={errors.idInstance?.message}
                placeholder="idInstance"
                required
                inputClassName={styles.input}
                autoComplete="off"
            />
            <Input
                {...register('apiTokenInstance')}
                errorMessage={errors.apiTokenInstance?.message}
                placeholder="apiTokenInstance"
                required
                inputClassName={styles.input}
                autoComplete="off"
            />

            <Button isLoading={isPending} className={styles.login__button} type="submit">
                Войти
            </Button>
        </form>
    );
};

export default LoginPage;
