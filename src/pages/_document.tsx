import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body className=''>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}