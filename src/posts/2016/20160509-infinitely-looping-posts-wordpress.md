---
title: Infinitely Looping Posts in WordPress
date: '2016-05-09 06:43:47'
slug: infinitely-looping-posts-in-wordpress
status: publish
---

I made a couple of little PHP functions to help me out with a silly pagination wall that I frequently hit when building WordPress sites. These functions were heavily inspired from [this public gist](https://gist.github.com/banago/5603826). 

Unlike the default `get_next_post()` and `get_previous_post()` functions, my functions will return the first/last post if you are currently viewing the last/first post in that post type. 

Here they are:

```php
/**
* Gets the next post in the current post type, even if is last post
* Inspired from https://gist.github.com/banago/5603826
*
* @method get_next_post_looped
* @return WordPress Post Object
*/
function get_next_post_looped() {
    $post_type = get_post_type();
    if ( get_adjacent_post( false, '', false) ) {
        return get_next_post();
    } else {
        $loop = new WP_Query( 'posts_per_page=1&order=ASC&post_type=' . $post_type );
        $loop->the_post();
        $postToReturn = get_post();
        wp_reset_query();
        return $postToReturn;
    }
}
/**
* Gets the previous post in the current post type, even if is last post
* Inspired from https://gist.github.com/banago/5603826
*
* @method get_previous_post_looped
* @return WordPress Post Object
*/
function get_previous_post_looped() {
    $post_type = get_post_type();
    if ( get_adjacent_post( false, '', true) ) {
        return get_previous_post();
    } else {
        $loop = new WP_Query( 'posts_per_page=1&order=DESC&post_type=' . $post_type );
        $loop->the_post();
        $postToReturn = get_post();
        wp_reset_query();
        return $postToReturn;
    }
}
```
