import axios from "axios";

export const apiUrl = 'http://localhost:8080/';
export const timeout = 2000;
export const axinst = axios.create({
    baseURL: apiUrl,
    timeout: timeout,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const processError = (err) => {
  let errMsg = ""
  if (!err.response){
    errMsg = "Сервер не отвечает. Возможно проблемы с Интернет. Повторите позже. Если проблема не исчезнет, обратитесь в техническую поддержку"
  }else{
    if (err.status === 401 || err.status === 403){
      errMsg = "Неправильные имя пользователя или пароль"
    }else{
      errMsg = "Непредусмотренная ошибка. Свяжитесь с технической поддержкой"
    }
    return errMsg
  }

}