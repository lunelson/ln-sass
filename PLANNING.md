# ln-sass planning

## reset

reset-hard()
  - meyer-style reset of all typographic block elements to size 1em and margins: 0, padding: 0

## typo

reset necessary
  - all typo elements line-height inherit
  - all typo elements margin top and bottom 0


@mixin setup-typo($sizes)
  - take a list of six size arguments, for standard heading levels; assume %p is at 1/0
  - @include typo-item() for standard set of WYSIWYG elements
  - VARIANT setup-mod-typo() uses mod-typo-item() as described below

@mixin typo-child($size, $suffix)
  - output styles for '.typo > &' or '.typo--#{$suffix} > &'
  - also creates a scope: so that within nested elements (ul li, dl dd, etc.) further styling can be done
  - VARIANT mod-typo-item() outputs typo-item with mod-size arg, under media((for: font-size-mod)) {}

@mixin typo-scope($size, $alias, $height: null, $at-root: true) // NB height should be null for auto
  - usu. applied to a container
  - outputs font-size and line-height if other than current default
  - creates corresponding scope, outputs @content @at-root for child styles
  - VARIANT: mod-typo-scope() outputs typo-scope with mod-size arg, under media((for: font-size-mod)) {}

## layout

setup-grid
  grid-placeholders
  grid-extensions
setup-page
  page-placeholders
  page-extensions



$layout-mixins: ();
@mixin grid()
  - check map-get()
@mixin grid-size()
@mixin cell()
@mixin cell-size()

- grid n cell mixins output if in media query?
- width still needs a better name
- do unwrap and unpage classes;
- eliminate "layout direction" ? not queryable from unwrap classes

    .unwrap
        .wrap--right &
        .wrap--left &
    .unwrap--left
        .wrap--right &
        .wrap--left &
    .unwrap--right
        .wrap--right &
        .wrap--left &

    .unpage--x
    .unpage--right
    .unpage--left

- add wrap() and page() mixins

## vx units

- add an extra variable to `vx` function, to allow an arbitrary other element inserted in to the calc expression
	- NB this will allow vx-based typo-margins, for example, by inserting `trim-height()`

## media

-   implement JSON output of query-data to head { font-family }

## reset

-   reset stuff
    -   font normalization
    -   svg normalization
    -   supports for picturefill 2
    -   other html5 shit
