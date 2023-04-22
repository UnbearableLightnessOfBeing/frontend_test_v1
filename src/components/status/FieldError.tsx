export const FieldError = ({ message }: { message: string | undefined }) => {
    return <div className="input-container_error">{message ?? "Ошибка"}</div>;
};
