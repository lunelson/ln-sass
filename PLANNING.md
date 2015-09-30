# ln-sass planning

## reset

reset-hard()
  - meyer-style reset of all typographic block elements to size 1em and margins: 0, padding: 0

necessary for typo:
  - all typo elements line-height inherit
  - all typo elements margin top and bottom 0

## typo

new plan wrt media queries
    - don't process media(()) in the mixin, but check against media-orig-value() before outputting styles
    - add code to auto-extend if pre-included and not currently in media query

remaining proofs
    - can you still style lists and tables properly

## layout

ln-layout-grid
    - generate placeholders on @import
setup-grid()
    - extend placeholders
setup-page()
    - generate placeholders



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
