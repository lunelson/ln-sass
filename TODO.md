## function

- parents-last
- parents-initial
- sibling-of
- adjacent-to

## files

config
function
function-media
function-layout
function-typo
helper
helper-media
helper-layout
helper-typo

mixin
mixin-font
mixin-grid
mixin-page
mixin-stack
mixin-typo
reset
reset-ln
reset-meyer
setup
setup-base
setup-media
setup-elem
setup-font
setup-grid
setup-page
setup-stack
setup-theme
setup-unpage
setup-wrap
utils
utils-string

## files

media-function
media-helper
media-mixin
media-setup
media-setup--alt

layout-function
layout-helper
layout-mixin--helper
layout-mixin--grid
layout-setup--element
layout-setup--helper
layout-setup--grid
layout-setup--unpage
layout-setup--wrap
layout-setup--xtra

// theme-function
// theme-helper
// theme-mixin
// theme-setup

typo-function
typo-helper
typo-mixin
typo-setup--fonts
typo-setup--stack

util-...

## main

- break up file-names
- rename selector function again
    parents-last
    parents-initial
    parents-insert('.typo', '*')
- add layout classes
    posn // relative
    posn--f // fixed
    posn--f-...
    posn--a // absolute
    posn--a-...

### main/base

- media function/mixin

    @function media-keys-for

    @mixin media2(a,b) {}

    @mixin media2((split: a d e)) {}
    @mixin media2((where: margin-y)) {}

    @mixin media2((keys: a d e)) {}
    @mixin media2((vals: margin-y)) {}


### main/grid

- revamp the mixin
    - will grid and cell mixin output if in media query?
        - use @at-root before extending;
        - do a media((for: margin-x)) for any arguments
    - width still needs a better name
        - span?

    // SPAN2
    @function span($span: 1 2, $opts:(), $left: null, $right: null) {
      @if type-of($opts) == 'map' { @return span($span, $opts...); }
      @else {
        @return $span $left $right
      }
    }
    // article: using map splats for flexible argument patterns
    .test {
      span: span(3 4, (right: hi, left: there));
      span: span(3 4, $right: no);
    }


### layout

- write wrap mixin
- do unwrap classes correctly
  .unwrap--right
  .unwrap--right-from-right
  etc.

### typo

- eliminate unused typo-helper
- finish typo testing
    - can you still style lists and tables properly
    - protocol for defining local stuff

```scss
.test {
  // make placeholders
  $p: '%#{unique-id()}';
  $h: '%#{unique-id()}';

  // make styles
  #{$p} { color: blue; }
  #{$h} { color: red; }

  // extend
  h1, h2, h3 { @extend #{$h}; }
  p, ul, ol { @extend #{$p}; }
}
```

## util

### util/reset

- make a reset-hard() mixin
    (meyer-style reset of all typographic block elements to size 1em and margins: 0, padding: 0)
- other thotz re reset
    - font normalization
    - svg normalization
    - supports for picturefill 2
    - other html5 shit

### util/vx units

- add an extra variable to `vx` function, to allow an arbitrary other element inserted in to the calc expression
	- NB this will allow vx-based typo-margins, for example, by inserting `trim-height()`