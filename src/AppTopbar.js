import React from 'react';
import classNames from 'classnames';
import AppMenu from './AppMenu';
import { Ripple } from 'primereact/ripple';
import { useHistory} from 'react-router-dom';
import AppSets from './service/AppSets';
import './hatul.css';
const AppTopbar = (props) => {

	let topbarMenuClassName = classNames('layout-profile-menu fadeInDown ', { 'layout-profile-menu-active': props.topbarUserMenuActive });
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

			<div className="layout-topbar-grid layout-topbar-grid-column-fixed">
				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed ">
					<img src="/assets/images/hatul_logo.jpg" height="40px" alt="logotype"/> 
				</div>
				<div className="layout-topbar-grid-column p-red layout-topbar-grid-column-fixed p-pl-6 p-pr-6">
					 חתול מדען
				
					</div>	
				<div className="layout-topbar-grid-column">
					<AppMenu model={props.model} horizontal={props.horizontal} menuHoverActive={props.menuHoverActive} isMobile={props.isMobile}
						onMenuItemClick={props.onMenuItemClick} onRootMenuItemClick={props.onRootMenuItemClick} onSidebarClick={props.onSidebarClick} />
				</div>
				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed p-menu-custom">
				   <div><i className="pi pi-phone" ></i> +972 53-640-5871</div>
				   <div><i className="pi pi-facebook" ></i> <a className="p-menu-custom" href="https://www.facebook.com/groups/Khatulmadan">facebook</a></div>
				</div>

				<div className="layout-topbar-grid-column layout-topbar-grid-column-fixed p-menu-custom p-pl-3">
					
				<i className="pi pi-globe" ></i> RU	
				</div>
			</div>
		</div>
	);
}

export default AppTopbar;
