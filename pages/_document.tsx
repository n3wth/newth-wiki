import { IconContext } from '@react-icons/all-files'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  override render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.png'
            />

            <link rel='manifest' href='/manifest.json' />

            {/* Critical inline CSS to prevent white flash */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  * {
                    background: transparent !important;
                  }
                  html, body, #__next {
                    background: #000000 !important;
                    background-color: #000000 !important;
                    color: #ffffff !important;
                  }
                  .notion-app, .notion, .notion-page, .notion-viewport, .notion-frame {
                    background: #000000 !important;
                    background-color: #000000 !important;
                    color: #ffffff !important;
                  }
                  div[style*="background: white"],
                  div[style*="background-color: white"],
                  div[style*="background:white"],
                  div[style*="background-color:white"] {
                    background: #000000 !important;
                    background-color: #000000 !important;
                  }
                `
              }}
            />
          </Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Force dark mode and prevent white flash */
;(function () {
  // Set black background as early as possible
  if (document.documentElement) {
    document.documentElement.style.backgroundColor = '#000000';
    document.documentElement.style.background = '#000000';
  }
  if (document.body) {
    document.body.style.backgroundColor = '#000000';
    document.body.style.background = '#000000';
    document.body.style.color = '#ffffff';
  }

  // Force all divs to not be white
  var style = document.createElement('style');
  style.innerHTML = 'html,body,div{background:#000!important;background-color:#000!important}';
  document.head.appendChild(style);

  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'

  // Always force dark mode
  document.body.classList.add(classNameDark);

  // Store dark mode preference
  try {
    localStorage.setItem(storageKey, JSON.stringify(true));
  } catch (err) {}
})();
`
              }}
            />
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
