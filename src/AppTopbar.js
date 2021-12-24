import React from 'react';
import classNames from 'classnames';
import AppMenu from './AppMenu';
import './hatul.css';
const AppTopbar = (props) => {

	let menuButtonClassName = classNames('layout-menubutton ', { 'layout-menubutton-active': props.menuActive })

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
			</div>
		</div>
	);
}

export default AppTopbar;
