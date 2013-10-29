regx = [
    {
        search: '<div class="fleur">h</div>',
        replace: '',
        flags: 'g'
    },
    {
        search: '<title>',
        replace: '<!--',
        flags: 'g'
    },
    {
        search: '</title>',
        replace: '-->',
        flags: 'g'
    },
    {
        search: ' class="toc"',
        replace: '',
        flags: 'g'
    },
    {
        search: ' class="header"',
        replace: '',
        flags: 'g'
    },
    {
        search: '<meta http-equiv="content-type" content="text/html; charset=UTF-8"><link rel="stylesheet" media="all" href="public/stylesheets/normalize.css"><link rel="stylesheet" media="all" href="docco.css"></head>',
        replace: '',
        flags: 'g'
    },
    {
        search: '<pre><code>',
        replace: '<pre class="prettyprint linenums">',
        flags: 'g'
    },
    {
        search: '</code></pre>',
        replace: '</pre>',
        flags: 'g'
    },
    {
        search: '<code>',
        replace: '<code style="font-size: .9em; font-family: monospace; line-height: 1; display: inline-block; background-color: #f5f5f5; box-sizing: border-box; padding: 1px 3px; border-radius: 3px; font-weight: bold;">',
        flags: 'g'
    },
    {
        search: "<hr>",
        replace: "<p></p><hr />",
        flags: 'g'
    },
    {
        search: "<h1>",
        replace: '<h1 style="color: #000; font-size: 20pt; font-family: Calibri; margin-bottom: 10px;">',
        flags: 'g'
    },
    {
        search: "<h2>",
        replace: '<p></p><h2 style"color: #7eb400; font-size: 18pt; font-family: Calibri;">',
        flags: 'g'
    },
    {
        search: "<h3>",
        replace: '<p></p><h3 style="color: #7eb400; font-size: 14pt; font-family: Calibri;">',
        flags: 'g'
    },
    {
        search: "<h4>",
        replace: '<p></p><h4 style="color: #7eb400; font-size: 12pt; font-family: Calibri;">',
        flags: 'g'
    },
    {
        search: "<p>",
        replace: '<p style="padding-left: 30px; padding-top: 10px; font-size: 12pt; font-family: Calibri;">',
        flags: 'g'
    },
    {
        search: "<ol>",
        replace: '<ol style="margin-left: 20px; margin-top: 2px; padding-top: 0;">',
        flags: 'g'
    },
    {
        search: "<ul>",
        replace: '<ul style="margin-left: 20px; margin-top: 2px; padding-top: 0;">',
        flags: 'g'
    },
    {
        search: "<li>",
        replace: '<li style="padding-top: 5px; font-size: 12pt; font-family: Calibri;">',
        flags: 'g'
    },
    {
        search: '<li style="padding-top: 5px; font-size: 12pt; font-family: Calibri;"><p style="padding-left: 30px; padding-top: 10px; font-size: 12pt; font-family: Calibri;">',
        replace: '<li style="padding-top: 5px; font-size: 12pt; font-family: Calibri;"><p style="padding-left: 0; font-size: 12pt; font-family: Calibri;">',
        flags: 'g'
    },
    {
        search: '<a href="',
        replace: '<a target="_blank" href="',
        flags: 'g'
    },
    {
        search: '<!DOCTYPE html><html><head>',
        replace: '',
        flags: 'g'
    },
    {
        search: '<body><div class="container"><div class="page">',
        replace: '',
        flags: 'g'
    },
    {
        search: '</div></body></html>',
        replace: '',
        flags: 'g'
    },
    {
        search: '<div>',
        replace: '',
        flags: 'g'
    },
    {
        search: '</div>',
        replace: '',
        flags: 'g'
    },
    {
        search: '<h3 style="color: #7eb400; font-size: 14pt; font-family: Calibri;">Table of Contents</h3><ol style="',
        replace: '<h3 style="display: none; height: 0; width: 0; color: #7eb400; font-size: 14pt; font-family: Calibri;">Table of Contents</h3><ol style="display: none; height: 0; width: 0;margin-left: 20px; margin-top: 2px; padding-top: 0;">',
        flags: 'g'
    },
    {
        search: '<img',
        replace: '<div style="padding: 0; margin: 0; display: block; height: 5px; overflow: hidden;">&nbsp;</div><img style="display: inline-block; margin-bottom: 10px; margin-left: -20px;"',
        flags: 'g'
    },
    {
        search: '<!--README.md--><h1 style="color: #000; font-size: 20pt; font-family: Calibri; margin-bottom: 10px;">README.md</h1>',
        replace: '',
        flags: 'g'
    }
]