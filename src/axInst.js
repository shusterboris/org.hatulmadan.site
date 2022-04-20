import axios from "axios";

const token = JSON.parse(sessionStorage.getItem('token'))
export const apiUrl = 'https://q.hatulmadan.net/';
//export const apiUrl = 'http://localhost:8080/';
export const timeout = 2000;
export const axHeaders = {headers: {'Authorization': token?.gwttoken, 'Content-Type': 'application/json'}}
export const axinst = axios.create({
    baseURL: apiUrl,
    timeout: timeout,
    headers: axHeaders.headers
  });

export const processError = (err) => {
  let errMsg = ""
  if (!err.response){
    return "Сервер не отвечает. Возможно проблемы с Интернет. Повторите позже. Если проблема не исчезнет, обратитесь в техническую поддержку"
  }else{
    let status = err.response.status
    let msg = err.response.data
    if (status === 401 || status === 403){
      errMsg = "Неправильные имя пользователя или пароль"
    }else if (status = 422){
      errMsg = (msg) ? msg : "Введенные данные не могут быть сохранены. Свяжитесь с технической поддержкой"
    }else{
      errMsg = (msg) ? msg : "Непредусмотренная ошибка. Свяжитесь с технической поддержкой"
    }
    return errMsg
  }

}