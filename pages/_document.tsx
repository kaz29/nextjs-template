import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet as StyledComponentSheet } from 'styled-components'
import { ServerStyleSheets as MaterialUiStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheet()
    const materialUiStyleSheets = new MaterialUiStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: React.ComponentType<any>) => {
            return (props: any) => {
              return styledComponentSheet.collectStyles(
                materialUiStyleSheets.collect(<App {...props} />),
              )
            }
          },
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          styledComponentSheet.getStyleElement(),
          materialUiStyleSheets.getStyleElement(),
        ],
      } as any
    } catch (err) {
      console.error(err.stack)
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          {(this.props as any).styleTags}
        </Head>
        <body>
          <section id="root">
            <Main />
          </section>
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // const sheets = new ServerStyleSheets()
  // const originalRenderPage = ctx.renderPage

  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  //   })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles)],
  }
}

export default MyDocument
