

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
