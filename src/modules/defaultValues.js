// defaultValues.js
// ================
// Stores static default values

define({
  // dependencyBlacklist
  // -------------------
  // Variable names that are not allowed as dependencies to functions
  //
  // RequireJS special magic modules
  // https://github.com/requirejs/requirejs/wiki/differences-between-the-simplified-commonjs-wrapper-and-standard-amd-define#magic-modules
  'dependencyBlacklist': {
    'require': 'remove',
    'exports': true,
    'module': 'remove'
  },

  // defaultLOC
  // ----------
  // Default line of code property
  'defaultLOC': {
    'start': {
      'line': 0,
      'column': 0
    }
  },

  // defaultRange
  // ------------
  // Default range property
  'defaultRange': [0, 0]
});