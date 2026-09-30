# Task 2 — Contact Form

A responsive contact form built with plain HTML, CSS and JavaScript, as part of
the Elevvo Front-End Web Development internship.

## What it does

- Collects a full name, an email address, a subject and a message
- Validates every field in JavaScript when the form is submitted
- Marks the fields that failed in red and explains what is wrong
- Clears an error as soon as the user fixes it, not while they are still typing
- Confirms with a success message and clears the form when everything passes
- Works on phones, tablets and desktops

## Validation rules

| Field               | Rule 
|
| Full Name           | Required, at least 2 characters, letters and spaces only 
| Email Address       | Required, must look like `you@example.com` 
| Subject             | Required, at least 3 characters 
| Message             | Required, at least 10 characters 

## Built with

- HTML5 — semantic structure, labels tied to their inputs for accessibility
- CSS3 — Flexbox for centering, `max-width` and a media query for responsiveness
- JavaScript — no libraries

## Notes

The form does not send anything: there is no back end behind this page, so the
submit handler calls `preventDefault()` and reports the result on the page
instead.

## Running it

Open `index.html` in a browser. There is nothing to install or build.