import { EditableProfileCard } from 'feature/EditableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');

    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;


