import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga'
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import AppTopbar from './AppTopbar';
import PrimeReact from 'primereact/api';
import {Login} from './components/Login';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import EmptyPage from './components/MainPage';
import CoursesPage from './components/CoursesPage';
import NewsPage from './components/NewsPage';
import ProjPage from './components/ProjPage';
import TeamPage from './components/TeamPage';
import FAQPage from './components/FAQPage';
import TestPage from './components/TestPage';
import RouteChangeTracker from './components/RouteChangeTracker';
import { Survey } from './components/survey/Survey';
import useToken from './useToken'
import { Lessons } from './components/Lessons/Lessons';
import { Lesson } from './components/Lessons/Lesson';
import {Quiz } from './components/survey/Quiz';
import { VideoViewer } from './components/Lessons/VideoViewer';
import { GroupsViewAndEdit } from './components/GroupsViewAndEdit';
import { CourseList } from './components/CourseList';
const TRACKING_ID = "G-1TMTRGQK4S"; 
ReactGA.initialize(TRACKING_ID);

const App = (props) => {

    const [horizontal] = useState(true);
    const [topbarSize] = useState('large');
    const [topbarColor] = useState('layout-topbar-faraway');
    const [menuColor] = useState('layout-menu-light');
    const [menuActive, setMenuActive] = useState(false);
    const [menuHoverActive, setMenuHoverActive] = useState(false);
    const [topbarUserMenuActive, setTopbarUserMenuActive] = useState(false);
    const [inputStyle] = useState('outlined');
    const [ripple] = useState(true);
    const {token, setToken} = useToken();

    PrimeReact.ripple = true;

    let menuClick;
    let userMenuClick;

    const onWrapperClick = () => {
        if (!menuClick) {
            setMenuActive(false)
            unblockBodyScroll();

            if (horizontal) {
                setMenuHoverActive(false);
            }
        }

        if (!userMenuClick) {
            setTopbarUserMenuActive(false);
        }

        userMenuClick = false;
        menuClick = false;
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;

        if (!horizontal || isMobile()) {
            setMenuActive(prevMenuActive => !prevMenuActive);
        }

        event.preventDefault();
    };

    const blockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    const onTopbarUserMenuButtonClick = (event) => {
        userMenuClick = true;
        setTopbarUserMenuActive(prevTopbarUserMenuActive => !prevTopbarUserMenuActive);

        event.preventDefault();
    };

    const onTopbarUserMenuClick = (event) => {
        userMenuClick = true;

        if (event.target.nodeName === 'BUTTON' || event.target.parentNode.nodeName === 'BUTTON') {
            setTopbarUserMenuActive(false)
        }
        event.preventDefault();
    };

    const onRootMenuItemClick = (event) => {
        menuClick = true;
        if (horizontal && isMobile()) {
            setMenuHoverActive(event.isSameIndex ? false : true);
        }
        else {
            setMenuHoverActive(prevMenuHoverActive => !prevMenuHoverActive);
        }
    };

    const onMenuItemClick = (event) => {
        if (event.item && !event.item.items) {
            if (!horizontal || isMobile()) {
                setMenuActive(false);
                unblockBodyScroll();
            }

            setMenuHoverActive(false);
        }
    };

    const onSidebarClick = () => {
        menuClick = true;
    };

    const isMobile = () => {
        return window.innerWidth <= 1024;
    };

    useEffect(() => {
        if (menuActive) {
            blockBodyScroll();
        }
        else {
            unblockBodyScroll();
        }
    }, [menuActive]);

    const layoutContainerClassName = classNames('layout-container', {
        'layout-menu-horizontal': horizontal,
        'layout-menu-active': menuActive,
        'layout-top-small': topbarSize === 'small',
        'layout-top-medium': topbarSize === 'medium',
        'layout-top-large': topbarSize === 'large',
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple,
    }, topbarColor, menuColor);

    const routers = [
        {path: "/" , component: EmptyPage, exact: true},
        {path: "/login/:targetPage", component: Login},        
        {path: "/login", component: Login},
        {path: "/main" , component: EmptyPage, exact: true},
        {path: "/courses" , component: CoursesPage,exact: true},
        {path: "/news" , component: NewsPage,exact: true},
        {path: "/projects" , component: ProjPage,exact: true},
        {path: "/team" , component: TeamPage,exact: true},
        {path: "/faq", component: FAQPage,exact: true},
        {path: "/test", component: TestPage,exact: true},
       
        {path: "/lessons", component: Lessons, auth: false},        
        {path: "/lesson", component: Lesson, auth: true},
        {path: "/videoviewer", component: VideoViewer, auth: true},
        {path: "/groups", component: GroupsViewAndEdit, auth: true},
        {path: "/courseList", component: CourseList, auth: true},
        {path: "/quiz",component: Quiz, auth: false },
        {path: "/survey",component: Survey, auth: false },
        {path: "/public/" },
    ];

    const getAppMenu = () => {
        let menu = [];
        menu =  [
            {label: '??????????????', icon: 'pi pi-th-large', to: '/main'},
            {label: '??????????????', icon: 'pi pi-volume-up', to: '/news'},
            {label: '??????????', icon: 'pi pi-list', to: '/courses'},
            {label: 'FAQ', icon: 'pi pi-question', to: '/faq'},
            {label: '??????????????', icon: 'pi pi-palette', to: '/projects'},
            {label: '?? ??????', icon: 'pi pi-user', to: '/team'},
        ];
        if (token){
            const subItems = [
                {label: '?????????????????? ??????????????', icon: 'pi pi-file', to: '/lessons'},
                {label: '????????????', icon: 'pi pi-question-circle', to: '/survey'},
            ]
            if (props.user && props.user.hasAuthorities('super')){
                subItems.push(
                    {label: '??????????', icon: 'pi pi-list', to: '/courseList'},
                    {label: '????????????', icon: 'pi pi-users', to: '/groups'}
                )
            }
            const profileItem = {label: '??????????????', icon: 'pi pi-id-card', items: subItems}
            menu.push(profileItem)
        }  
        return menu;  
    }

    return (
        <div className={layoutContainerClassName} onClick={onWrapperClick}>
            <div className="layout-top">
                <AppTopbar topbarUserMenuActive={topbarUserMenuActive} menuActive={menuActive} menuHoverActive={menuHoverActive}
                    onMenuButtonClick={onMenuButtonClick} onTopbarUserMenuButtonClick={onTopbarUserMenuButtonClick}
                    onTopbarUserMenuClick={onTopbarUserMenuClick} model={getAppMenu()} horizontal={horizontal} onSidebarClick={onSidebarClick}
                    onRootMenuItemClick={onRootMenuItemClick} onMenuItemClick={onMenuItemClick} isMobile={isMobile} token={token}/>

                <div className="layout-topbar-separator" />
            </div>

            <div className="layout-content">                
                {   
                    routers.map((router, index) => {
                        if (router.auth && !token){
                            return <Route key={`router${index}`} path={router.path} component={Login}/>
                        }
                        if (router.exact) {
                            return <Route key={`router${index}`} path={router.path} exact component={router.component} />
                        }
                        return <Route key={`router${index}`} path={router.path} component={router.component} />
                    })
                }
            </div> 
                    
            <RouteChangeTracker/>

            {menuActive && <div className="layout-mask" />}
        </div>
    );

}

export default App;
