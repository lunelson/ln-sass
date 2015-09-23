# ln.sass planning

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

## typo

- rename the function that calculates trim() to trim-height();
- reset the return value to be positive

## media

-   implement JSON output of query-data to head { font-family }

## reset

-   reset stuff
    -   font normalization
    -   svg normalization
    -   supports for picturefill 2
    -   other html5 shit
