### layout

- write wrap mixin
- do unwrap classes correctly
  .unwrap--right
  .unwrap--right-from-right
  etc.

### typo

- eliminate unused typo-helper
- finish typo testing
    - can you still style lists and tables properly
    - protocol for defining local stuff

```scss
.test {
  // make placeholders
  $p: '%#{unique-id()}';
  $h: '%#{unique-id()}';

  // make styles
  #{$p} { color: blue; }
  #{$h} { color: red; }

  // extend
  h1, h2, h3 { @extend #{$h}; }
  p, ul, ol { @extend #{$p}; }
}
```

## util

### util/reset

- make a reset-hard() mixin
    (meyer-style reset of all typographic block elements to size 1em and margins: 0, padding: 0)
- other thotz re reset
    - font normalization
    - svg normalization
    - supports for picturefill 2
    - other html5 shit

### util/vx units

- add an extra variable to `vx` function, to allow an arbitrary other element inserted in to the calc expression
	- NB this will allow vx-based typo-margins, for example, by inserting `trim-height()`