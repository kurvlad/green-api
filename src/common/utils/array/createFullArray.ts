export const createFullArray = <T extends string>() => {
    return <U extends T[]>(array: U & ([T] extends [U[number]] ? unknown : never)) => array;
};
