# ln.sass planning

## layout

- add more classes

    l-page, page-x

    l-wrap, wrap-each, wrap-alpha, wrap-until-beta, wrap-from-delta
    l-unwrap-left l-unwrap-page

    , unwrap-left, unwrap-to-page, unwrap-right

    l-section, l-section-sm, l-section-lg

    g-row -sm, -lg
        g-cel
        g-col

- expand layout.scss to provide both 'float' and 'inline' grid and col classes (fgrid, igrid, etc.)

## vx / typo

- add an extra variable to `vx` function, to allow an arbitrary other element inserted in to the calc expression
	- NB this will allow vx-based typo-margins, for example, by inserting `trim-height()`
- rename the function that calculates trim-height to trim-height(); return value should be positive

- create a setup 'scope' mixin which runs render-query-typo() at the end
- allow set-typo to take arbitrary size and margin
    - if rem, leave it alone
    - if px, convert to rem
    - if unitless, assume it's a pos/neg index, default 0

## general

-   implement JSON output of query-data to head { font-family }
-   reset stuff
    -   font normalization
    -   svg normalization
    -   supports for picturefill 2
    -   other html5 shit
