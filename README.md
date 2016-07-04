## ln-sass

My personal sass sort-of-framework and utilities

## what's next

- theme solution; combine with colors
- exclusive media query mixins
- reduce complexity of media values,
    - e.g. one set of mults; NO mults for line-height
    - but keep the line-height() function as multiple of the base, for now
- remove the large 'setup' routine for typo
    - probably won't use named classes for lines... or?
    - keep named classes for stacks only
        - NB. typo mixin should only try to @extend if $curr-typo-sel is not null
- eliminate .cell and .fcell classes in grid setup; make implicit cells, as with the mixins
- revise typo-setup mixin to create .typo-- variants only
- revise typel mixin to invoke all named mult-y contexts
- change typo to
    @mixin typo() / typo-stack()
    @mixin typel()
    @function typo-margin()
- change base/media to
    $media-base
    $media
    @function medium-normalize
    @mixin media()
    @mixin media-for()
    @mixin media-each()

>    // NEW PARADIGM
    .page
        .wrap--c2-c6.wrap--left
            .unwrap--right.unwrap--from-left
                .page--right
                    //-...
            .grid--s
                .stack
                    h3
                    p
                    .cols--s
                    .stack
                .stack--s
                    .hold--x
                        .hold--asp
                            img
                    p.caption

## Tests with JavaScript Test Runner

```
npm install
npm test
```

## new file structure

layout
    config
    helper
    mixin
    setup
media
    config
    helper
    mixin
    setup
    setup-alt
    setup-util
theme
    config
    [color]
    setup
typo
    config
    [font]
    helper
    mixin
    setup
utility
    ...