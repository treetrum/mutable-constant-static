---
title: Remove WordPress comments without a plugin
date: '2017-10-09 23:04:24'
slug: remove-wordpress-comments-without-plugin
status: publish
---

I try my best to not use plugins whilst building Wordpress sites unless they are completely necessary. This has the added benefit of knowing exactly what is happening in the code of each website. For simple features, this is clearly the way to go. 

I have recently written a small snippet to disable comments across the board on a Wordpress site. It comes in at only 14 lines, which is significantly smaller than any plugin I could find that does the same thing. 

It's worth noting that my snippet is very 'single' use oriented. All it does is disable comments for everything but the 'shop_order' post type (for WooCommerce). There are no options or customisations. However, for 95% of my needs, this will work. 

See the snippet below for the code: 

```php
add_action('init', 'remove_comment_support', 100);
function remove_comment_support() {
    // Remove post type support for each post type
    foreach (get_post_types() as $post_type) {
        if (post_type_supports( $post_type, 'comments' )) {
            // Don't remove comment support for shop orders
            if ($post_type !== 'shop_order') {
                remove_post_type_support( 'page', 'comments' );
            }
        }
    }
    // Uncomment the following to force hiding comment meta boxes
    // remove_meta_box( 'commentsdiv', 'post', 'normal' );
}
// Hide edit screen in WP backend
add_action( 'admin_menu', 'remove_comments_page' );
function remove_comments_page() {
    remove_menu_page( 'edit-comments.php' );
}
```

**Endnote:**<br>
Wow, it's been a long time since my last post 😳