import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Analytics } from '../../../components';
import Readme from '../../../components/Analytics/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/Analytics', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Analytics idTracking={text('idTracking', 'UA-0000000-1')} />
      <div>This component is embedded directly in the javascript and shows nothing.</div>
    </ThemeSelector>
  )),
  jsxConfig
);