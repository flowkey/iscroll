Package.describe({
  name: 'flowkey:iscroll',
  version: '5.1.3',
  // Brief, one-line summary of the package.
  summary: 'A high performance, small footprint, dependency free, multi-platform javascript scroller - iScroll.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/flowkey/iscroll.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('iscroll.js', 'client');
  api.export('IScroll');
});
