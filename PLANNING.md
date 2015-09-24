# ln-sass planning

## naming

- re-do the names of all mixins, like this shit here:

<!--

@include ln-reset()
    @include ln-reset-hard()
    @include ln-reset-normalize()
@include ln-fonts()
@include ln-media()
  @include ln-media-object()
  @include ln-media-styles()
@include ln-layout()
  @include ln-layout-page()
  @include ln-layout-grid()

p { @include ln-typo(); }
h1 { @include ln-typo(5); }
h2 { @include ln-typo(4); }
h3 { @include ln-typo(3); }
ul {
  @include ln-typo() {
    @include adjacent-to(h1 h2 h3 h4 h5) {
      background-color: blue;
    }
  }
}

-->

## typo

- expand the ln-fonts() mixin to do the font-face mixin for each font type
- ln-typo-init > ln-typo-main
- $typo-classes > $trim-classes: ( line, contents )
- change trim-content thing to 'contents'? e.g. '.trim--contents'

## layout

- do unwrap and unpage classes;
- eliminate "layout direction" ? not queryable from unwrap classes

    .unwrap
        .wrap--right &
        .wrap--left &
    .unwrap--left
        .wrap--right &
        .wrap--left &
    .unwrap--right
        .wrap--right &
        .wrap--left &

    .unpage--x
    .unpage--right
    .unpage--left

- add wrap() and page() mixins

## vx units

- add an extra variable to `vx` function, to allow an arbitrary other element inserted in to the calc expression
	- NB this will allow vx-based typo-margins, for example, by inserting `trim-height()`

## media

-   implement JSON output of query-data to head { font-family }

## reset

-   reset stuff
    -   font normalization
    -   svg normalization
    -   supports for picturefill 2
    -   other html5 shit
