import React, { useState, useRef }  from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Toast} from 'primereact/toast';

export const Login = (props) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [newPassword2, setNewPassword2] = useState('');
	const [changeMode, setChangeMode] = useState(false);	
	const messages = useRef(null);

	const goForward = () => {
	}

	return (
		<div className="login-body">
			<div className="login-panel ui-fluid" style={{height: '500px'}}>
				<Toast ref = {messages} position = {"top-left"} life='10000'/>
				<div className="login-panel-header">
					<img src="/assets/images/isradon-logo-hor.png" alt="logotype"/>		
				</div>
				<div className="login-panel-content" >
					<div className="p-grid">
						<div className="p-col-12">
							<h1>HR - портал</h1>
							{(props.location.state && props.location.state.hasOwnProperty("reason")) && <h2>{props.location.state.reason}</h2>}
							<h2>Пожалуйста, введите пользователя и пароль для входа</h2>
						</div>
						<div className="p-col-12">
							<span className="p-float-label">
								<InputText id="username" type="text" style={{ width: '100%' }} v-model="username" 
									value={userName} onChange={(e)=>setUserName(e.target.value)}/>
								<label htmlFor="username">Имя (логин) пользователя: </label>
							</span>
						</div>
						<div className="p-col-12">
							<span className="p-float-label">
								<InputText id="password" type="password" style={{ width: '100%' }} v-model="password" 
									value={password} onChange={(e)=>setPassword(e.target.value)}/>
								<label htmlFor="password">Пароль: </label>
							</span>
						</div>
							<div className="p-col-6">
								{changeMode && <InputText id="newPassword1"  style={{ width: '100%' }} type="password" 
										placeholder="Новый пароль" 
										value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>}
							</div>	
							<div className="p-col-6">
								{changeMode && <InputText id="newPassword2" type="password" style={{ width: '100%' }} v-model="password" 
										placeholder="Повторите новый пароль" 
										value={newPassword2} onChange={(e)=>setNewPassword2(e.target.value)}/>}
							</div>	
						<div className="p-col-6">
							<Button label={!changeMode ? "Изменить пароль" : "Не менять"}
								className="p-button-help"
								tooltip={!changeMode ? "Нажмите для изменения своего пароля" : "Нажмите, чтобы выйти из режима смены пароля, войти со старым"}
								onClick={()=>setChangeMode(!changeMode)}/> 
						</div>
						<div className="p-col-6" style={{ textAlign: 'right' }}>
							<Button label="Дальше" tooltip="Вход в систему"
							onClick={()=>goForward()} style={{ width: '100%' }} />
						</div>						
					</div>
				</div>
			</div>
		</div>
	)
}
