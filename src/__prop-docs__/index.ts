/**
 * THIS IS AN AUTOGENERATED FILE. ALL CHANGES WILL BE LOST.
 */
import type { Manifest } from '@microsoft/arbutus.prop-docs-cli';

const manifest: Manifest = {
  DemoComponent: {
    tags: {},
    filePath: 'src/components/demo-component/demo-component.tsx',
    description: '',
    displayName: 'DemoComponent',
    methods: [],
    props: {
      title: {
        defaultValue: { value: '' },
        description: 'The title to display.',
        name: 'title',
        declarations: [
          {
            fileName:
              'blueprints-gatsby-markdown-2/src/components/demo-component/demo-component.types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: { name: 'string' },
      },
      text: {
        defaultValue: { value: '' },
        description: 'The text to display.',
        name: 'text',
        declarations: [
          {
            fileName:
              'blueprints-gatsby-markdown-2/src/components/demo-component/demo-component.types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: { name: 'string' },
      },
    },
  },
};

export default manifest;
