## typo

- allow trim() functions to receive $line and $font arguments
- allow null and/or negative arguments to `trimmed()` to cause reversal of the trimming
- create a 'class--typo' mixin??
  produce .typo--${m} each named size context? (only for one line-height of course) ?

## stack
- ?

## misc
- expand theme solution; combine with colors
- reduce complexity of media values:
    - e.g. one set of mults; NO mults for line-height
    - but keep the line-height() function as multiple of the base, for now

## media
- test new m, m- and mm functions/mixins
- check that `media-for(typo)` and other cases work correctly

## API changes
- replace trim-margin and typo-margin calls with em-trimmed() or ex-trimmed() functions
- replace bemify and multify with base-class and mult-class

## NEXT
- group inits in 'media' 'general' 'layout'; not 'base'




## functions

mm-base()
mm-base-orig()
mm()
mm-orig()

m(m)
m-orig(m)
m-value(key, m)
m-orig-value(key, m)
m-font-size()
m-line-height()
m-inner-y(mult, m)
m-inner-x(mult, m)
m-outer-t,-r,-b,-l(mult, m)
m-mult-y(key, m)
m-mult-x(key, m)

## mixins

m(min, max)

mm(media, leading, trailing)

mm-for(keys...)
mm-range(min, max)

mm-init(baseMap, mediaMap)
    // if media keys contain 'breakpoint'
    mm-setup-by-breakpoint
    // otherwise work based on grid-values
    mm-setup-by-column

## structure

$mm:
  base
  base-orig
  media
  media-orig
    ...
