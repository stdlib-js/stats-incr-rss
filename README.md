<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrrss

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the [residual sum of squares][residual-sum-of-squares] (RSS) incrementally.

<section class="intro">

The [**residual sum of squares**][residual-sum-of-squares] (also referred to as the **sum of squared residuals** (SSR) and the **sum of squared errors** (SSE)) is defined as

<!-- <equation class="equation" label="eq:residual_sum_of_squares" align="center" raw="\operatorname{RSS} = \sum_{i=0}^{n-1} (y_i - x_i)^2" alt="Equation for the residual sum of squares."> -->

<div class="equation" align="center" data-raw-text="\operatorname{RSS} = \sum_{i=0}^{n-1} (y_i - x_i)^2" data-equation="eq:residual_sum_of_squares">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/78799028a150a44d463029bdb62ac870b1c1f9d4/lib/node_modules/@stdlib/stats/incr/rss/docs/img/equation_residual_sum_of_squares.svg" alt="Equation for the residual sum of squares.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-rss
```

</section>

<section class="usage">

## Usage

```javascript
var incrrss = require( '@stdlib/stats-incr-rss' );
```

#### incrrss()

Returns an accumulator `function` which incrementally computes the [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrrss();
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [residual sum of squares][residual-sum-of-squares]. If not provided input values `x` and `y`, the accumulator function returns the current [residual sum of squares][residual-sum-of-squares].

```javascript
var accumulator = incrrss();

var r = accumulator( 2.0, 3.0 );
// returns 1.0

r = accumulator( -1.0, -4.0 );
// returns 10.0

r = accumulator( -3.0, 5.0 );
// returns 74.0

r = accumulator();
// returns 74.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrrss = require( '@stdlib/stats-incr-rss' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrrss();

// For each simulated datum, update the residual sum of squares...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) - 50.0;
    v2 = ( randu()*100.0 ) - 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-rss.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-rss

[test-image]: https://github.com/stdlib-js/stats-incr-rss/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-rss/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-rss/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-rss?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-rss.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-rss/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-rss/main/LICENSE

[residual-sum-of-squares]: https://en.wikipedia.org/wiki/Residual_sum_of_squares

</section>

<!-- /.links -->
