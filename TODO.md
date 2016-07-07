## misc
- expand theme solution; combine with colors
- reduce complexity of media values:
    - e.g. one set of mults; NO mults for line-height
    - but keep the line-height() function as multiple of the base, for now

## typo
- create an init-typo mixin
  produce .typo--${m} each named size context? (only for one line-height of course) ?

## classes
- replace bemify and multify with base-class and mult-class

## NEXT
- group inits in 'media' 'general' 'layout'; not 'base'

```scss

@include init-media;
@include init-base;
@include init-layout;

@include media-for('typo') {
 h1 { @include typo(/* .... */); }
 h2 { @include typo(/* .... */); }
 p {
   @include typo(/* .... */) {
     @include adjacent-self {
       margin-top: typo-margin(null) // new API; inverts the trim
     }
     @include adjacent-to($headings) {
       margin-top: typo-margin(0.5);
     }
   }
 }
}

.some-module .content {

  @include stack('lg') {
   /* perhaps automatically include t-media here, for @content passed to stack */
   h1 { @include typo(/* .... */); }
   h2 { @include typo(/* .... */); }
   p {
     @include typo(/* .... */) {
       @include adjacent-self {
         margin-top: typo-margin('undo') // new API
       }
       @include adjacent-to($headings) {
         margin-top: typo-margin(0.5);
       }
     }
   }
  }
}
```