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
- revise typo-item mixin to invoke all named mult-y contexts
- change typo to
    @mixin typo()
    @mixin typo-item()
    @function typo-margin()
- change base/media to
    $media-base
    $media
    @mixin media()
    @mixin media-for()
    @mixin media-each()

>    // NEW PARADIGM
    .page
        .wrap--c2-c6
            .fgrid--s
                .stack // at this point, might as well forgo the stack class, since you can't inherit the spacing ??
                    h3
                    p
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
