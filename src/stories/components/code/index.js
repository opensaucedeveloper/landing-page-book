import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { Code } from '../../../components';
import Readme from '../../../components/Code/README.md';
import jsxConfig from '../../mock/jsxConfig';

setAddon(JSXAddon);
const stories = storiesOf('Components/Code', module);

stories.addDecorator(withKnobs);

const langoptions = {
  javascript: 'javascript',
  markdown: 'markdown',
  jsx: 'jsx',
  css: 'css',
  sass: 'sass'
};

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Code"
        description="Show code chunks can help to quickly explain the most complicated stuff ;)"
      />
      <Code
        code={text(
          'Code',
          'var component = {\n\tname: "react-code",\n\tauthor: "front10-devs",\n\trepo: "https://gitlab.com/front10-devs/landing-page-book"\n};'
        )}
        languageCode={select('Language', langoptions, 'javascript')}
        readOnly={boolean('Read Only', false)}
        lineNumbers={boolean('Show line numbers', true)}
        showheader={boolean('Show header', true)}
        showfooter={boolean('Show footer', true)}
        codeLink={text('Code link', 'https://codesandbox.io/s/pmjvk5wl27')}
        updateCode={() => {}}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
