var spans = document.getElementsByTagName('span');
for (var i = 0, l = spans.length; i < l; i++) {
    var span = spans[i];
  if(span.innerText.includes('Download prohibited'))
  var a = span.previousElementSibling;
  if(a) {
      span.innerText = '';
      const aParts = a.href.split('/');
      a.href = 'https://www.google.com/search?q=' + aParts[aParts.length - 1]
      a.innerText = 'Search'
  }
}
