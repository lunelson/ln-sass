# API overview

## workflow

1. global variable overrides
    - global-defaults, margin-defaults, size-defaults
    - base-data, query-data, typo-data _TODO: rename to font-data_
2. setup-base()
    - _back up base-data to base-orig?_
    - global-data merged over global-defaults
    - base-data merged over base-defaults
    - 'html-scale' and 'line-height' calc'd and merged to base-data
    - `*` `html` and `body` codes plus `.body_col/_row` styles
    - any additional @content
3. setup-query() _TODO: rename to setup-queries_
    - back up query-data to query-orig
    - look at width and height queries separately; following for width only
    - sort width queries by breakpoint; assume mobile first, mind-width only
    - store base-data in a reference-spec
    - parse through each query, merging over reference spec each time
    - merge these back to width-queries along with values for html-scale, content-width each time
    - output styles if spec'd in query for `html`, `body`, `.body_col/_row` etc.
    - merge width-queries back to the main query-data object
4. setup-sizes-per-query() OR setup-sizes()
    - latter mixin calls the former with `null` first argument
    - will run a submixin for each query context specified
    - _should merge a flag to first context with new properties_
5. setup-margins-per-query() OR setup-margins()
    - latter mixin calls the former with `null` first argument
    - will run a submixin for each query context specified
    - _should merge a flag to query-orig to first context with new properties_
6. set-typo-per-query OR set-typo
    - take an alias and size argument, optional query-argument
    - output base styles
    - for each query in query-orig that has-key 'margin-y', 'line-height', 'sizes' or 'margins', parse out query styles

## global objects and settings

$base-data -> base
$query-data -> queries
$typo-data -> fonts

$size-defaults
$size-assignments

$margin-defaults
$margin-assignments

## sub-functions

@function calc-sizes($options: ()) -> generate-sizes
@function 

## functions

@function get-margin
@function get-size

## mixins

@mixin setup-base()
@mixin setup-query() -> setup-queries

@mixin setup-sizes() 
- _reincorporate calc-sizes()_
- calls setup-sizes-per-query(null, $args)

@mixin setup-query-sizes() -> setup-sizes-per-query()

@mixin setup-margins() -> calls setup-margins-per-query(null, $args)
@mixin setup-query-margins() -> setup-margins-per-query()

@mixin set-typo()
@mixin get-typo()

## submixins

@mixin assign-sizes()

@mixin set-margins() -> generate-margins
@mixin assign-margins()