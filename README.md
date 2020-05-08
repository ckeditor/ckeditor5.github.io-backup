# Backup of historical doc builds from ckeditor5.github.io

GH pages implement a 10GB limit for the repo size. Each documentation build is now 800MB which means that we have to clean up old builds from https://github.com/CKEditor5/ckeditor5.github.io.

However, these old builds have historical value and they cannot be easily recreated, so let's back them up here.

The process is simple – copy `docs/` from https://github.com/CKEditor5/ckeditor5.github.io to this repo and remove all but last 5 version on https://github.com/CKEditor5/ckeditor5.github.io.

**NOTE:** Do not merge `master` from the upstream to this repository!
