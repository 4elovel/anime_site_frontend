// 'use client';

import Link from 'next/link';
import ProfileDropdown from '@/components/ProfileDropdown';

export const metadata = {
    title: 'Anime Site Головна сторінка',
    description: 'Головна сторінка Anime Site',
}

export default function Page() {

  return (
    <div className="container">
      <header className="header_main_page">
          <div className="header_buttons">
              <ProfileDropdown />
              <Link href="/signin">
                <button
                    className="header_button_login"
                >
                    Увійти
                </button>
              </Link>
              <Link href="/signup">
                <button
                    className="header_button_signup"
                >
                    Реєстрація
                </button>
              </Link>
          </div>
      </header>
      <main>

      </main>
      <footer></footer>
    </div>
  );
}
