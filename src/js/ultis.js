var breakpoints = [
  {
    value: "30rem",
    deviceName: "mobile",
    customProperty: "--breakpoint-mobile",
  },
  {
    value: "40rem",
    deviceName: "tablet",
    customProperty: "--breakpoint-tablet",
  },
  {
    value: "48rem",
    deviceName: "medium-screen",
    customProperty: "--breakpoint-laptop-mini",
  },
  {
    value: "64rem",
    deviceName: "laptop",
    customProperty: "--breakpoint-laptop",
  },
  {
    value: "80rem",
    deviceName: "desktop",
    customProperty: "--breakpoint-desktop",
  },
  {
    value: "96rem",
    deviceName: "tv",
    customProperty: "--breakpoint-tv",
  },
];

// Margin Padding
var spacing = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56,
];
var cssMarginClass = (value) => {
  return `
    .mb-${value} {
         margin-block: var(--spacing-${value}) !important;
    }

    .mbs-${value} {
         margin-block-start: var(--spacing-${value}) !important;
    }

    .mbe-${value} {
         margin-block-end: var(--spacing-${value}) !important;
    }

    .mi-${value} {
         margin-inline: var(--spacing-${value}) !important;
    }

    .mis-${value} {
         margin-inline-start: var(--spacing-${value}) !important;
    }

    .mie-${value} {
         margin-inline-end: var(--spacing-${value}) !important;
    }

`;
};

var cssPaddingClass = (value) => {
  return `
    .pb-${value} {
         padding-block: var(--spacing-${value}) !important;
    }

    .pbs-${value} {
         padding-block-start: var(--spacing-${value}) !important;
    }

    .pbe-${value} {
         padding-block-end: var(--spacing-${value}) !important;
    }

    .pi-${value} {
         padding-inline: var(--spacing-${value}) !important;
    }

    .pis-${value} {
         padding-inline-start: var(--spacing-${value}) !important;
    }

    .pie-${value} {
         padding-inline-end: var(--spacing-${value}) !important;
    }

`;
};

// Font Size
var fs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var cssFontSizeClass = (value) => {
  return `
    .fs-${value} {
      font-size: var(--font-size-${value}) !important;
    }

`;
};

// Font Weight
var fw = [100, 200, 300, 400, 500, 600, 700, 800, 900];
var cssFontWeightClass = (value) => {
  return `
    .fw-${value} {
      font-weight: var(--font-weight-${value}) !important;
    }

`;
};

// Display
var display = ["block", "inline-block", "flex"];
var cssDisplayClass = (value) => {
  return `
    .d-${value} {
      display: ${value} !important;
    }
`;
};

// Flexbox

// onwards
// only

var flex = [
  { class: "flex-direction-row", value: "flex-direction: row" },
  {
    class: "flex-direction-row-reverse",
    value: "flex-direction: row-reverse",
  },
  { class: "flex-direction-column", value: "flex-direction: column" },
  {
    class: "flex-direction-column-reverse",
    value: "flex-direction: column-reverse",
  },
  { class: "flex-wrap-nowrap", value: "flex-wrap: nowrap" },
  { class: "flex-wrap-wrap", value: "flex-wrap: wrap" },
  { class: "flex-wrap-wrap-reverse", value: "flex-wrap: wrap-reverse" },
  {
    class: "justify-content-flex-start",
    value: "justify-content: flex-start",
  },
  { class: "justify-content-flex-end", value: "justify-content: flex-end" },
  { class: "justify-content-center", value: "justify-content: center" },
  {
    class: "justify-content-space-between",
    value: "justify-content: space-between",
  },
  {
    class: "justify-content-space-around",
    value: "justify-content: space-around",
  },
  {
    class: "justify-content-space-evenly",
    value: "justify-content: space-evenly",
  },
  { class: "justify-content-start", value: "justify-content: start" },
  { class: "justify-content-end", value: "justify-content: end" },
  { class: "justify-content-left", value: "justify-content: left" },
  { class: "justify-content-right", value: "justify-content: right" },
  { class: "align-content-flex-start", value: "align-content: flex-start" },
  { class: "align-content-flex-end", value: "align-content: flex-end" },
  { class: "align-content-center", value: "align-content: center" },
  {
    class: "align-content-space-between",
    value: "align-content: space-between",
  },
  {
    class: "align-content-space-around",
    value: "align-content: space-around",
  },
  {
    class: "align-content-space-evenly",
    value: "align-content: space-evenly",
  },
  { class: "align-content-stretch", value: "align-content: stretch" },
  { class: "align-content-start", value: "align-content: start" },
  { class: "align-content-end", value: "align-content: end" },
  { class: "align-content-baseline", value: "align-content: baseline" },
  { class: "align-items-stretch", value: "align-items: stretch" },
  { class: "align-items-flex-start", value: "align-items: flex-start" },
  { class: "align-items-flex-end", value: "align-items: flex-end" },
  { class: "align-items-center", value: "align-items: center" },
  { class: "align-items-baseline", value: "align-items: baseline" },
  { class: "align-items-start", value: "align-items: start" },
  { class: "align-items-end", value: "align-items: end" },
  { class: "align-items-self-start", value: "align-items: self-start" },
  { class: "align-items-self-end", value: "align-items: self-end" },
  { class: "align-self-auto", value: "align-self: auto" },
  { class: "align-self-flex-start", value: "align-self: flex-start" },
  { class: "align-self-flex-end", value: "align-self: flex-end" },
  { class: "align-self-center", value: "align-self: center" },
  { class: "align-self-baseline", value: "align-self: baseline" },
  { class: "align-self-stretch", value: "align-self: stretch" },
  { class: "flex-grow-0", value: "flex-grow: 0" },
  { class: "flex-grow-1", value: "flex-grow: 1" },
  { class: "flex-grow-2", value: "flex-grow: 2" },
  { class: "flex-grow-3", value: "flex-grow: 3" },
  { class: "flex-grow-4", value: "flex-grow: 4" },
  { class: "flex-grow-5", value: "flex-grow: 5" },
  { class: "flex-shrink-0", value: "flex-shrink: 0" },
  { class: "flex-shrink-1", value: "flex-shrink: 1" },
  { class: "flex-shrink-2", value: "flex-shrink: 2" },
  { class: "flex-shrink-3", value: "flex-shrink: 3" },
  { class: "flex-shrink-4", value: "flex-shrink: 4" },
  { class: "flex-shrink-5", value: "flex-shrink: 5" },
  { class: "flex-fill", value: "flex: 0 0 auto" },
];

var generateResponsiveCSS = (flex, breakpoints) => {
  var responsiveStyles = flex.map((item) => {
    return `.${item.class} {
            ${item.value} !important;
        }`;
  });

  // onwards
  for (var i = 0; i < breakpoints.length; i++) {
    var point = breakpoints[i];
    var res = flex.map((item) => {
      return `
        .${item.class}-${point.deviceName}-onwards {
              ${item.value} !important;
          }
      `;
    });
    responsiveStyles.push(`
          @media screen and (min-width: ${point.value}) {
              ${res.join("\n")}
          }
      `);
  }

  // onnly
  for (var i = 0; i < breakpoints.length - 1; i++) {
    var point = breakpoints[i];
    var nextpoint = breakpoints[i + 1];
    var res = flex.map((item) => {
      return `
          .${item.class}-${point.deviceName}-only {
              ${item.value} !important;
          }
          `;
    });
    responsiveStyles.push(
      `@media screen and (min-width: ${point.value}) and (max-width: ${
        nextpoint.value
      }) {
                ${res.join("\n")}
            }
      `
    );
  }

  return responsiveStyles;
};

var fsCssArr = ["/* Font Size */\n", ...fs.map(cssFontSizeClass)];
var fwCssArr = ["/* Font Weight */\n", ...fw.map(cssFontWeightClass)];
var mCssArr = ["/* Margin */\n", ...spacing.map(cssMarginClass)];
var pCssArr = ["/* Padding */\n", ...spacing.map(cssPaddingClass)];
var flexCssArr = [
  "/* Flex Box */",
  ...generateResponsiveCSS(flex, breakpoints),
];
var displayCssArr = ["/* Display */\n", ...display.map(cssDisplayClass)];
var cssArr = [
  ...fsCssArr,
  ...fwCssArr,
  ...mCssArr,
  ...pCssArr,
  ...displayCssArr,
  ...flexCssArr,
];

console.log(cssArr.join("\n"));
