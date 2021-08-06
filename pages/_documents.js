import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head/>
                 <style dangerouslySetInnerHTML={{__html: `
                       @font-face {
                            font-family: Pangram;
                            src: url("/fonts/Pangram-Regular.ttf");
                            font-style: normal;
                            font-display: optional;
                         }
                    @font-face {
                        font-family: Pangram-Bold;
                        src: url("/fonts/Pangram-Bold.ttf");
                        font-style: normal;
                        font-display: optional;
                     }
                     
                     @font-face {
                        font-family: Pangram-Light;
                        src: url("/fonts/Pangram-Light.ttf");
                        font-style: normal;
                        font-display: optional;
                     }

                `}}/>
                <body>
                <Main />

                <NextScript />
                </body>
            </Html>
        )
    }
};

// <style dangerouslySetInnerHTML={{__html: `
//   @font-face {
//     font-family: 'Colfax';
//     font-weight: 300;
//     src: url('/static/fonts/ColfaxWebRegularSub.woff') format('woff');
//   }
//
//   @font-face {
//     font-family: 'Colfax';
//     font-weight: bold;
//     src: url('/static/fonts/ColfaxWebBoldSub.woff') format('woff');
//   }
// }
// `}}/>
