---
title: Sass Flex Grid With Internal Borders Using A Custom Mixin
date: '2018-02-09 01:11:09'
slug: sass-flex-grid-internal-borders-using-custom-mixin
status: publish
---

If you @include this onto a container element it will split its children up into equal widths (depending on the column count you provide) and lay them out in a flex grid. Between each item will be a border. No outside borders! 

There are no vendor prefixes on this so you will either need to use something like [Autoprefixer](https://github.com/postcss/autoprefixer) or get prefixing manually! 

This has been extremely useful for me a few times now, hopefully it can help someone else!

You can view the source code for this mixin below.

```scss
@mixin flexGridWithInsideBorders(
    $numberOfColumns,
    $borderColor: hsl(0, 0, 90%),
    $borderWidth: 1px,
    $borderStyle: solid,
    $numberOfItemsInLastRow: false
) {
    // Handle default numberOfItemsInLastRow
    @if ($numberOfItemsInLastRow == false) {
        $numberOfItemsInLastRow: $numberOfColumns;
    }

    // Setup the base flex grid
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & > * {
        // Setup the item widths
        width: (100%) / $numberOfColumns;

        // Setup the item borders
        border-right: $borderWidth $borderStyle $borderColor;
        border-bottom: $borderWidth $borderStyle $borderColor;

        // Remove the border right from the last item in each row
        &:nth-child(#{$numberOfColumns}n + #{$numberOfColumns}) {
            border-right: 0;
        }

        // Remove the border botom from each item in the last row
        @for $i from 1 through $numberOfItemsInLastRow {
            &:nth-last-child(#{$i}) {
                border-bottom: 0;
            }
        }
    }
}
```
