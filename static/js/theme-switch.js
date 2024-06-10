const themeSwitch = document.getElementById('theme-switch');
const bootstrapLink = document.querySelector('link[href="Darkmode.min.css"]');
const customLink = document.querySelector('link[href="darkmain.css"]');

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    // Enable custom styles (dark theme)
    enableStylesheet(customLink);
    // Disable Bootstrap styles
    disableStylesheet(bootstrapLink);
  } else {
    // Enable Bootstrap styles (light theme)
    enableStylesheet(bootstrapLink);
    // Disable custom styles
    disableStylesheet(customLink);
  }
});

function enableStylesheet(node) {
  node.removeAttribute('disabled');
}

function disableStylesheet(node) {
  node.setAttribute('disabled', 'true');
}
