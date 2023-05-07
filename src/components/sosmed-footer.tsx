import Icon from '@mdi/react';
import { mdiNewspaperVariantOutline, 
    mdiInstagram,
    mdiWhatsapp,
    mdiFacebook
  } from '@mdi/js';

export default function Footer() {
    return (
      <div className="flex mt-8 p-4 md:p-8">
        <a href="https://instagram.com/orarijaksel">
          <Icon className="main-social-icon" path={mdiInstagram} size={1.5} color="white" />
        </a>
        <a href="https://www.facebook.com/groups/orarijaksel">
        <Icon className="main-social-icon" path={mdiFacebook} size={1.5} color="white" />
        </a>
        <a href="https://wa.me/6281278910534">
          <Icon className="main-social-icon" path={mdiWhatsapp} size={1.5} color="white" />
        </a>
      </div>
    )
}