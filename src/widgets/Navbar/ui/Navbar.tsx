import { LoginModal } from 'feature/AuthByUsername';
import { LangSwitcher } from 'feature/LangSwitcher';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { getUserAuthData, userActions } from 'entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);
    
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogoutHandler = useCallback(() => {
        setIsAuthModal(false);
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.navbarControls}>
                <LangSwitcher />
                {
                    userAuthData
                        ? <>
                            <Dropdown
                                trigger={<Avatar size={40} src={userAuthData.avatar} />}
                                items={[
                                    {
                                        content: t('Профиль'),
                                        href: `${RoutePath.profile}${userAuthData.id}`
                                    },
                                    {
                                        content: t('Создать статью'),
                                        href: RoutePath.article_create
                                    },
                                    {
                                        content: t('Выйти'),
                                        onClick: onLogoutHandler
                                    }
                                ]}
                            />
                        </>
                        : <Button
                            onClick={onShowModal}
                            theme={ButtonTheme.OUTLINE}
                            className={cls.links}
                        >
                            {t('Войти')}
                        </Button>
                }
            </div>
            {
                !userAuthData && isAuthModal && <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            }
        </div>
    );
});


