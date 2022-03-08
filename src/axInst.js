import axios from "axios";

//export const apiUrl = 'https://q.hatulmadan.net/';
export const apiUrl = 'http://localhost:8080/';
export const timeout = 2000;
export const axinst = axios.create({
    baseURL: apiUrl,
    timeout: timeout,
    headers: {'Content-Type': 'application/json'}
  });

export const processError = (err) => {
  let errMsg = ""
  if (!err.response){
    errMsg = "Сервер не отвечает. Возможно проблемы с Интернет. Повторите позже. Если проблема не исчезнет, обратитесь в техническую поддержку"
  }else{
    let status = err.response.status
    let msg = err.response.data
    if (status === 401 || status === 403){
      errMsg = "Неправильные имя пользователя или пароль"
    }else if (status = 422){
      errMsg = (msg) ? msg : "Введенные данные не могут быть сохранены. Свяхитесь с технической поддержкой"
    }else{
      errMsg = (msg) ? msg : "Непредусмотренная ошибка. Свяжитесь с технической поддержкой"
    }
    return errMsg
  }

}