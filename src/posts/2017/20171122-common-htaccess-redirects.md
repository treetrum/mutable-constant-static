---
title: Common .htaccess Redirects
date: '2017-11-22 04:55:05'
slug: common-htaccess-redirects
status: publish
---

Some common .htaccess file redirect. Helpful for redirecting to/from www. and forcing SSL.

```bash
# Ensure Rewrite Engine is on
# ---------------------------

RewriteEngine On


# Force to SSL
# ------------

RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]


# Force to www.
# -------------

# Non SSL Redirect
RewriteCond %{HTTPS} off
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule .* http://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# SSL Redirect
RewriteCond %{HTTPS} on
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule .* https://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]


# From to NON www.
# ----------------

# Non SSL Redirect
RewriteCond %{HTTPS} off
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule .* http://%1%{REQUEST_URI} [R=301,L]

# SSL Redirect
RewriteCond %{HTTPS} on
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule .* https://%1%{REQUEST_URI} [R=301,L]
```
