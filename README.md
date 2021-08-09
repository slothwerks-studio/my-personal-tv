# My Personal TV
## A web app which allows a user to curate a list of their favorite videos on YouTube and watch them.

### How does it work?

This is a simple web app built with HTML, CSS, and JavsScript.  The HTML consists of a television image (replaced by a video when selected), a list of videos, and a form used to add a new video to the list.  The list is built using JavaScript from an array of objects.  The video is added to the app simply by using YouTube's [embed code](https://support.google.com/youtube/answer/171780?hl=en); the embedded iFrame is added using JavaScript when a video is selected.  Updates to the program array are saved in [localStorage](https://developer.mozilla.org/en-US/docs/Web/CSS/background).

This public codebase was intentionally created to allow beginner programmers to learn how to code.  It is also intentionally unfinished (see Improvements).

### Live preview
Want to try out the code?  Check out this [live preview](https://slothwerks-studio.github.io/my-personal-tv/).

### Improvements

- There are almost no styles for this app; these must be added in order to improve the UI and make it mobile-friendly.
- Due to [cross-origin issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors), videos may only be viewed if accessing the [deployed version of the site on GitHub Pages](https://slothwerks-studio.github.io/my-personal-tv/).
- Videos may be added to the list but not edited or removed.
