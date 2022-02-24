import React from 'react';
import classNames from 'classnames';
import AppMenu from './AppMenu';
import { Ripple } from 'primereact/ripple';
import './hatul.css';
import useToken from './useToken';
import { useHistory } from 'react-router-dom';

const AppTopbar = (props) => {
	let topbarMenuClassName = classNames('layout-profile-menu fadeInDown ', { 'layout-profile-menu-active': props.topbarUserMenuActive });
	let menuButtonClassName = classNames('layout-menubutton ', { 'layout-menubutton-active': props.menuActive })
	const {token, clearToken} = useToken()
	const history = useHistory()


	const getInk = (el) => {
        for (let i = 0; i < el.children.length; i++) {
            if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
                return el.children[i];
            }
        }
        return null;
	}
	
	const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

	const onItemClick = (event, itemNo) => {
		const ink = getInk(event.currentTarget);
		if (ink) {
			removeClass(ink, 'p-ink-active');
		}
		processTopbarMenuClick(itemNo);
	}

	const processTopbarMenuClick = (itemNo) =>{
		if (itemNo === 1){
			history.push("/login")
		}else if (itemNo === 2){
			clearToken()
			history.push("/login")
		}
	}

	return (
		<div className="layout-topbar">
			<button type="button" className={menuButtonClassName} onClick={props.onMenuButtonClick}>
				<div className="layout-menubutton-icon" />
			</button>

			<div className="layout-topbar-grid layout-topbar-grid-column-fixed ">
				<div className="layout-topbar-grid-column layout-topbar-grid-column">
					<div className='p-displayLogo'>
						<img src="/assets/images/hatul_logo.jpg" height="40px" alt="logotype"/> 
						<div className=" p-logo "> 
							חתול מדען
						</div></div>
					
				</div>	
				<div className="layout-topbar-grid-column">
					<AppMenu model={props.model} horizontal={props.horizontal} menuHoverActive={props.menuHoverActive} isMobile={props.isMobile}
						onMenuItemClick={props.onMenuItemClick} onRootMenuItemClick={props.onRootMenuItemClick} onSidebarClick={props.onSidebarClick} />
				</div>
				
				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed p-menu-custom p-pl-3">					
					<i className="pi pi-globe" ></i> RU	
				</div>
				<div layout-topbar-grid-column layout-topbar-grid-column-fixed>
					<button type="button" className="p-link profile-menu-button" onClick={props.onTopbarUserMenuButtonClick}>
						<img src="assets/images/login-ava-user.png" alt="User menu" />
					</button>
					<ul className={topbarMenuClassName} onClick={props.onTopbarUserMenuClick}>
						<li role="menuitem">
							<button type="button" className="p-link p-ripple" onClick={(e)=>onItemClick(e,1)}>
								<i className="pi pi-key"></i>
								<span>{token ? 'Изменить пользователя' : 'Войти в систему'}</span>
                                <Ripple />
							</button>
						</li>
						{token &&
						<li role="menuitem">
							<button type="button" className="p-link p-ripple" onClick={(e)=>onItemClick(e,2)}>
								<i className="pi pi-times"></i>
								<span>Выйти из системы</span>
								<Ripple />
							</button>
						</li>}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AppTopbar;
