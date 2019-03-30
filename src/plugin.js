// global: tinymce
//
// This plugin prevents icon fonts from being removed in TinyMCE. It also makes them selectable so
// you can easily copy/paste/delete them.
//
// The ability to change an icon is beyond the scope of this plugin.
//
(function() {
  const iconfonts = (function() { // eslint-disable-line no-unused-vars
    tinymce.PluginManager.add('iconfonts', editor => {

      const defaultSelector = [
        '.fa', // Font Awesome 4
        '.fab', '.fal', '.far', '.fas', // Font Awesome 5
        '.glyphicon' // Glyphicons
      ].join(',');

      const selector = editor.getParam('iconfonts_selector', defaultSelector);

      // Make sure <i> is a valid element
      editor.on('PreInit', () => {
        editor.schema.addValidElements('i[class|contenteditable]');
      });

      // Prepare icon font elements when content is set.
      //
      // This:
      //
      //   <i class="far fa-check"></i>
      //
      // Will become this:
      //
      //   <i class="far fa-check" data-cms-icon="true" contenteditable="false">
      //     <!-- icon -->
      //   </i>
      //
      editor.on('BeforeSetContent', event => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(event.content, 'text/html');
        const matches = doc.body.querySelectorAll(selector);

        for (let i = 0; i < matches.length; i++ ) {
          if (!matches[i].getAttribute('data-mce-iconfont')) {
            matches[i].setAttribute('data-mce-iconfont', true);
            matches[i].setAttribute('data-mce-iconfont-html', matches[i].innerHTML);
            matches[i].setAttribute('contenteditable', false);
            matches[i].innerHTML += '<!-- icon -->'; // make it not empty so TinyMCE won't remove it
          }
        }

        event.content = doc.body.innerHTML;
      });

      // Restore icon fonts when content is fetched.
      //
      // This:
      //
      //   <i class="far fa-check" data-cms-icon="true" contenteditable="false">
      //     <!-- icon -->
      //   </i>
      //
      // Will go back to this:
      //
      //   <i class="far fa-check"></i>
      //
      editor.on('GetContent', event => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(event.content, 'text/html');
        const matches = doc.body.querySelectorAll(selector);

        for (let i = 0; i < matches.length; i++) {
          if (matches[i].getAttribute('data-mce-iconfont')) {
            matches[i].innerHTML = matches[i].getAttribute('data-mce-iconfont-html');
            matches[i].removeAttribute('data-mce-iconfont');
            matches[i].removeAttribute('data-mce-iconfont-html');
            matches[i].removeAttribute('contenteditable');
          }
        }

        event.content = doc.body.innerHTML;
      });

      return {
        getMetadata: () => {
          return  {
            name: 'Icon Fonts',
            url: 'https://github.com/claviska/tinymce-iconfonts'
          };
        }
      };
    });
  })();
})();
