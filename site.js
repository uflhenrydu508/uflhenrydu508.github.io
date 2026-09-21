// Preserve the current section when switching language. Both pages also work without JavaScript.
const languageLink = document.querySelector('.language');
function updateLanguageLink() {
  if (languageLink) languageLink.hash = location.hash;
}
updateLanguageLink();
window.addEventListener('hashchange', updateLanguageLink);
