import React from 'react';
import classNames from 'classnames';
import AppMenu from './AppMenu';
import { useHistory} from 'react-router-dom';
import './hatul.css';
const AppTopbar = (props) => {

	let menuButtonClassName = classNames('layout-menubutton ', { 'layout-menubutton-active': props.menuActive })
	const history = useHistory();

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
		if (itemNo === 2){
			window.sessionStorage.clear();
		}
		history.push("/login")
	}

	return (
		<div className="layout-topbar">
			<button type="button" className={menuButtonClassName} onClick={props.onMenuButtonClick}>
				<div className="layout-menubutton-icon" />
			</button>

			<div className="layout-topbar-grid layout-topbar-grid-column-fixed ">
				<div className="layout-topbar-grid-column layout-topbar-grid-column">
				
					<img src="/assets/images/hatul_logo.jpg" height="40px" alt="logotype"/> 
				
				{/* <div className="layout-topbar-grid-column p-logo layout-topbar-grid-column-fixed p-pl-2 p-pr-6"> */}
				 <div className=" p-logo "> 
					 חתול מדען
				
					</div>
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
