# Simple Cookie Consent Modal

On page load it displays a modal with vendors list.
For each partner you get a link to their's cookie policy and ability to accept mentioned policy.

After selecting which cookie policy you agree to you can save your choices and continue to browse site.
Or you can opt to accept or reject all cookies.

## Run Instructions

Install necessary dependencies with

`npm install`

Change modal if needed, you have following options:

- `cName` -- cookie name
- `cExpire` -- expire cookie in days
- `title` -- modal tile
- `description` -- modal description

In case of changes run

`npm build`

See the modal in action with

`npm run server`
