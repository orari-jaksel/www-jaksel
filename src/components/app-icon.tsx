import Icon from '@mdi/react';
import Link from 'next/link'

interface Props {
    href: string, 
    icon: string, 
    title: string
}

export default function AppIcon(props: Props ) {
    return <Link href={ props.href } className="main-menu-item">
        <Icon path={ props.icon } size={2} />
        <p className="main-menu-item-text">{ props.title }</p>
    </Link>
}