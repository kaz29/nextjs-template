import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from "@storybook/addon-info"
import './story.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { I18nextProvider } from 'react-i18next'
import { withI18n } from 'storybook-addon-i18n'
import i18n from './i18n'
import {muiTheme} from 'storybook-addon-material-ui'
// @ts-ignore
import theme from '~/theme'
import config from '../app-config'
import { setConfig } from "next/config";

setConfig(config)

const req = require.context('../src/', true, /.*\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

if (process.env.NODE_ENV !== 'test') {
  addDecorator(withInfo)
  addParameters({ info: { inline: true } })
}

addDecorator(muiTheme([theme]))

const I18nProviderWrapper = ({ children, i18n, locale }) => {
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
addDecorator(withI18n)
addParameters({
  i18n: {
    provider: I18nProviderWrapper,
    providerProps: {
      i18n
    },
    supportedLocales: ["en", "ja"],
    providerLocaleKey: "locale",
  }
})

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

configure(loadStories, module);
