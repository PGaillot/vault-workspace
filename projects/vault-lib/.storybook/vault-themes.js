import { create } from 'storybook/theming/create';

// Vault-Tec/Fallout inspired palette (no new colors)
const background = '#060606'; // Vault terminal dark
const textColor = '#44FF57'; // Vault terminal green
const textLightColor = '#44ff5780'; // faded green

export default create({
    base: 'dark',
    // Typography
    fontBase: '"Fira Mono", "Open Sans", monospace',
    fontCode: 'Fira Mono, monospace',
    brandTitle: 'Vault Library',
    brandUrl: 'https://example.com',
    brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
    brandTarget: '_self',

    // Main colors
    colorPrimary: textColor,
    colorSecondary: textLightColor,

    // UI
    appBg: background,
    appContentBg: background,
    appPreviewBg: background,
    appBorderColor: textColor,
    appBorderRadius: 0,

    // Text colors
    textColor: textColor,
    textInverseColor: background,

    // Toolbar default and active colors
    barTextColor: textLightColor,
    barSelectedColor: textColor,
    barHoverColor: textColor,
    barBg: background,

    // Form colors
    inputBg: background,
    inputBorder: textColor,
    inputTextColor: textColor,
    inputBorderRadius: 0,

    // Customization for Vault-Tec/Fallout look
    // Use only the three defined colors for all accents
    // Focus/active states
    booleanBg: background,
    booleanSelectedBg: textLightColor,
    // Code block
    codeColor: textColor,
    codeBg: background,
    // Tooltip
    tooltipBg: background,
    tooltipColor: textColor,
    // Table
    tableBg: background,
    tableBorder: textLightColor,
    tableCellBg: background,
    tableTextColor: textColor,
    // Misc
    brandTextColor: textColor,
    // Selection
    selectionBg: textLightColor,
    selectionColor: textColor,
});