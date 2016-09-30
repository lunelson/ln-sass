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
