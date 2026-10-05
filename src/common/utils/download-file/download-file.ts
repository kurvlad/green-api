import { toast } from 'react-toastify';

export const fetchFile = (urlDocument: string) => {
    if (urlDocument) {
        const url = `${urlDocument}`;
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Не удалось скачать файл');
                }
                return res;
            })
            .then((res) => {
                const url = res.url;
                const a = document.createElement('a');
                a.href = url;
                document.body.append(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch((rej) => {
                toast.error(rej.message);
            });
    }
};
