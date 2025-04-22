import Link from 'next/link';

export const metadata = {
  title: 'Anime Site Головна сторінка',
  description: 'Головна сторінка Anime Site',
}

export default function Home() {
  return (
    <div className="container">
      <header>
          <div className="header_buttons">
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
