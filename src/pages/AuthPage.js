import { GoogleLogin } from "@react-oauth/google";

const AuthPage = () => {
  const responseGoogle = (response) => {
    // Здесь вы можете обработать ответ от Google после успешной авторизации
    console.log(response);
  };

  const onFailure = (error) => {
    // Обработка ошибок при авторизации
    console.error("Ошибка при авторизации через Google:", error);
  };

  return (
    <GoogleLogin
      buttonText="Войти через Google"
      onSuccess={responseGoogle}
      onFailure={onFailure}
    />
  );
};

export default AuthPage;
