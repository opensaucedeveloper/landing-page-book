import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import jsxConfig from '../../mock/jsxConfig';
import { Features, Code } from '../../../components';
import Readme from '../../../components/Features/README.md';

import def from '../../mock/components/codes/features';

setAddon(JSXAddon);
const stories = storiesOf('Components/Features', module);

stories.addDecorator(withKnobs);
const featuress = [
  {
    id: 1,
    image: 'images/features/code.png',
    title: 'Simple',
    subtitle: 'Easy to use',
    summary: 'Writing code is quicker, easier and cleaner now. Copy-paste approach.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    id: 2,
    image: 'images/features/speed.png',
    title: 'Faster',
    subtitle: 'Fast like Usain Bolt',
    summary:
      'With these components + their intuitive documentation, you will be faster than Usain Bolt.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    id: 3,
    image: 'images/features/themes.png',
    title: 'Theming',
    subtitle: 'Easy to create themes',
    summary: 'Library customization with CSS variables, theming and easy component changes.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    id: 4,
    image: 'images/features/testing.png',
    title: 'Unit test',
    subtitle: 'Robust components',
    summary: 'All components tested like a Swiss watch. Code coverage above 70%.',
    link: 'https://front10.com',
    linktext: 'See more...'
  }
];

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <Features
        showBorder={boolean('Show border', false)}
        showTitle={boolean('Show Title', true)}
        showImage={boolean('Show image', true)}
        showSubtitle={boolean('Show Subtitle', false)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', false)}
        imageBorder={boolean('Image border', false)}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        features={featuress}
      />
      <div className="mt-4">
        <Code
          code={def}
          languageCode="jsx"
          readOnly
          collapsible
          collapsed
          showDeleteButton={false}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
