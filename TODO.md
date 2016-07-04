## ...NEXT

- theme solution; combine with colors
- reduce complexity of media values:
    - e.g. one set of mults; NO mults for line-height
    - but keep the line-height() function as multiple of the base, for now
- revise typel mixin to invoke all named mult-y contexts
    ??
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
