# ln-sass planning

## typo

- $typo-classes > $trim-classes:

h2.line
h4.trim--both

div.trim--content
  h2 haha
  p whatever


.trim--bottom
.trim--both
.trim--contents

( line, contents )
- change trim-content thing to 'content'? e.g. '.trim--content'

## layout

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
