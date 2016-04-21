# Sass

add on npm?
    npm private?
Implement testing with true and mocha
bring back in as module, linked to local copy; switch branches as necessary

layout
    posn
    posn--f
    posn--f-...
    posn--a
    posn--a-...

selector
    sel-initial
    sel-last
    sel-add-before-last

# ln-sass planning

## reset

reset-hard()
  - meyer-style reset of all typographic block elements to size 1em and margins: 0, padding: 0

- other thotz re reset
    - font normalization
    - svg normalization
    - supports for picturefill 2
    - other html5 shit

necessary for typo:
  - all typo elements line-height inherit
  - all typo elements margin top and bottom 0

## typo

- *basically locked!*
- nice to have
    - add code to auto-extend if pre-included and not currently in media query

remaining proofs
    - can you still style lists and tables properly

## grid

- revamp the mixins
    - will grid and cell mixins output if in media query?
        - use @at-root before extending;
        - do a media((for: margin-x)) for any arguments
    - width still needs a better name
        - span?

## page

- fix wrap classes

.wrap
.wrap--alpha
.wrap--alpha-to
.wrap--to-delta
.wrap--beta-to-epsilon

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

## vx units

- add an extra variable to `vx` function, to allow an arbitrary other element inserted in to the calc expression
	- NB this will allow vx-based typo-margins, for example, by inserting `trim-height()`

## media

-   implement JSON output of query-data to head { font-family }