# sass-ln next

## next

- add a 'contrast' function to color utils
- add an extra variable to `vx` function, to allow an arbitrary other element inserted in to the calc expression
	- NB this will allow vx-based typo-margins, for example, by inserting `trim-height()`
- rename the function that calculates trim-height to trim-height(); return value should be positive
- cannibalize the ballistic library
- bring the util library in to the main one; rename / re-org wrt other '-util' named files
- expand layout.scss to provide both 'float' and 'inline' grid and col classes (fgrid, igrid, etc.)

_colors-util.scss -> _util-color
_colors.scss -> color

_layout-util.scss -> _util-layout
_layout.scss

_media-units.scss -> _util-media
_media-utils.scss -> [add to media]
_media.scss

_reset.scss
_typo.scss

_util-colors
_util-layout
_util-math
_util-media
_util-miscss
_util-sass
	_util-ss-lists
	_util-ss-strings
	_util-ss-numbers

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
