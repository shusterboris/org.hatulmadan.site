import React, { useState, useRef }  from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Toast} from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import useToken from '../useToken';
import { useForm, Controller } from 'react-hook-form';
import classNames from 'classnames';
import {apiUrl, timeout, processError} from '../axInst';
import axios from 'axios';

export const Login = (props) => {
	//login, reg, pasw
	const [mode, setMode] = useState("login");	
	const messages = useRef(null);
	const {token, setToken} = useToken(props.token)
	const {formState: { errors }, handleSubmit, control } = useForm();
	const [showMessage, setShowMessage] = useState(false);
	const [formData, setFormData] = useState({userName:'', password:'', newPassword1:'', newPassword2:''});
	const [pleaseWait, setPleaseWait] = useState(false)
	let btnRegTitle, btnChPaswTitle, btnRegTooltip, btnChPaswTooltip, newPswdTooltip, newPswd2Tooltip, btnRegIsVisible, btnChPaswIsVisible

	const logIn = (data) => {
		const body = {"username": data.userName, "password": data.password, "newPassword": data.newPassword1};
		const reqPath = {'login' : 'auth', 'reg': 'register', 'pasw': 'auth'}
		const header = {headers: {'Content-Type': 'application/json'}}

		axios.post(apiUrl+reqPath[mode], body, header, {timeout: timeout})
		.then((response)=>{
			setToken({"gwttoken":"Bearer " + response.data.jwttoken})
			if (window.location.pathname === '/login'){
				// window.location.assign(window.location.pathname)
				window.location.assign("/survey")
			}else{
				 window.location.assign("/")
			}
		})
		.catch((err)=>{
			let errMsg = processError(err)
			messages.current.show({severity:'error', summary:'Ошибка', detail:errMsg})			
		})
		.finally(
			setPleaseWait(false)
		)
	}

	

	const onSubmit = ( data ) =>{
		setPleaseWait(true)
		setFormData(data)	
		setShowMessage(true)
		logIn(data, mode)
	}

	const getFormErrorMessage = (name) => {
		return errors[name] && <small className="p-error">{errors[name].message}</small>
	};


	const changeDisplayMode = () => {
		//меняет надписи и подсказки кнопок регистрации и смены пароля, в зависимости от текущего состояния
		if (mode === 'reg'){
			btnRegTitle = 'Отменить'
			btnRegTooltip = 'Щелкните здесь, чтобы вернуться к режиму входа в систему '
			btnChPaswTitle = ''
			btnChPaswTooltip = ''
			newPswdTooltip = 'Пароль'
			newPswd2Tooltip = 'Повторите пароль'
			btnRegIsVisible = true
			btnChPaswIsVisible = false
		}else if (mode === 'pasw'){
			btnRegTitle = 'Отменить'
			btnRegTooltip = ''
			btnChPaswTitle = ''
			btnChPaswTooltip = ''
			newPswdTooltip = 'Новый пароль'
			newPswd2Tooltip = 'Повторите новый пароль'
			btnRegIsVisible = true
			btnChPaswIsVisible = false
		}else{
			//login mode
			btnRegTitle = 'Зарегистрироваться'
			btnRegTooltip = 'Щелкните здесь, чтобы зарегистрироваться, как новый пользователь'
			btnChPaswTitle = 'Изменить пароль'
			btnChPaswTooltip = 'Щелкните здесь, чтобы выйти из режима смены пароля'
			newPswdTooltip = 'Повторите пароль'
			newPswd2Tooltip = 'Повторите новый пароль'
			btnRegIsVisible = true
			btnChPaswIsVisible = true
		}
	}
	
	changeDisplayMode('login')
	return (
		<form  onSubmit={handleSubmit(onSubmit) }>
		<div className="login-body">
			<div className="login-panel ui-fluid" style={{height: '500px'}}>
				<Toast ref = {messages} position = {"top-left"} life='10000'/>
				<div className="login-panel-header">
					{pleaseWait && <div className="p-col-12"> <ProgressSpinner style={{width: '65px', height: '65px'}}/> </div>}
				</div>
				<div className="login-panel-content" style={{minWidth: '20em'}}>
					<div className="p-grid">
						<div className="p-col-12 p-py-0">
							<h2>Введите пользователя и пароль для входа</h2> 
						</div>
						<div className="p-col-12 p-py-0">
							<div className="p-float-label">
								<Controller name='userName' control={control}
									rules={{ 
										required: 'Имя пользователя должно быть заполнено',
										pattern: { value: /^[A-ז0-9-]*$/, message: 'Введены недопустимые символы' },										
									}}
									render={({ field, fieldState }) => (
										<InputText id={field.name} maxLength={25} {...field} autoFocus 
											style={{ width: '100%' }}
											className={classNames({ 'p-invalid': fieldState.invalid },'inputfield')}/>
                        				)}>
								</Controller>
								<label htmlFor="userName" className={classNames({ 'p-error': errors.name })}>Имя (логин) пользователя: </label>
							</div>
							{getFormErrorMessage('userName')}
						</div>
						{mode !== 'reg' && 
						<div className="p-col-12">
							<div className="p-float-label">
								<Controller name = 'password' control={control}
									rules={{										
										pattern: { value: /^[!A-ז0-9-]*$/, message: 'Введены недопустимые символы' },
										required: 'Не введен пароль. Введите его!'
									}}
									render = {({ field, fieldState }) => (
										<InputText id={field.name} maxLength={25} {...field} type="password"
											className={classNames({ 'p-invalid': fieldState.invalid },'inputfield')}
											style={{ width: '100%' }}
										/>)}>
								</Controller>
								<label htmlFor="password" className={classNames({ 'p-error': errors.name })}>Пароль: </label>
							</div>
							{getFormErrorMessage('password')}
						</div>}
						<div className='p-col-12 p-d-inline-flex p-jc-around p-py-2'>
							{btnRegIsVisible && 
							<Button className='p-link' style={{textDecoration:'underline'}} type="button"
								tooltip={btnRegTooltip}
								onClick={()=> mode !== 'login' ? setMode('login') : setMode('reg')}>
								{btnRegTitle}
							</Button>}
							{btnChPaswIsVisible &&
							<Button className='p-link' style={{textDecoration:'underline'}} type="button"
								tooltip={btnChPaswTooltip}
								onClick={()=> mode !== 'pasw' ? setMode('pasw') : setMode('login')}>
								{btnChPaswTitle}
							</Button>}
						</div>
						{(mode !== 'login') && <div className='p-col-12 p-py-3'>
							<Controller name='newPassword1' control = { control}
								rules={{										

									pattern: { value: /^[A-ז0-9-]*$/, message: 'Введены недопустимые символы' }
								}}
								render={({ field, fieldState }) => (
									<InputText id={field.name}  maxLength={25} {...field} type="password" style={{width:'100%'}} 
										className={classNames({ 'p-invalid': fieldState.invalid },'inputfield')}
										keyfilter = {/^[A-ז0-9-]*$/}
										placeholder={ newPswdTooltip}/>
							)}/>
							{getFormErrorMessage('newPassword1')}
						</div>}
						{(mode !== 'login') && <div className='p-col-12 p-py-0'>
							<Controller name='newPassword2' control = { control}
								rules={{										
									pattern: { value: /^[A-ז0-9-]*$/, message: 'Введены недопустимые символы' }
								}}
								render={({ field, fieldState }) => (
									<InputText id={field.name} maxLength={25} {...field} type="password" style={{width:'100%'}}
										className={classNames({ 'p-invalid': fieldState.invalid },'inputfield')}
										keyfilter = {/^[A-ז0-9-]*$/}
										placeholder={ newPswd2Tooltip}/>
							)}/>
							{getFormErrorMessage('newPassword2')}
						</div>}
						
						<div className="p-col-12" style={{ textAlign: 'right', minWidth:'15rem', maxWidth: '15%'  }}>
							<Button label="Дальше" tooltip="Вход в систему" type='submit'
									style={{ width: '100%' }} />
						</div>						
					</div>
				</div>
			</div>
		</div>
		</form>
	)
}
