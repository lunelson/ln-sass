# sass-ln next

## grids

- keep the simple approach with 1px min-height on cols and wraps via padding
- possibly make it directional
- build it back in to main thing, blog layout
- make sure grid class setups are moved out of setup-base() and in to setup-grids()

## typo

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
