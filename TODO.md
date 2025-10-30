# TODO: Fix Video Cropping, Black Bands, Enable Audio Playback, and Disable Downloads

- [x] Edit index.html: Add `playsinline` attribute to the video tag for iOS compatibility, remove `muted` to enable audio.
- [x] Edit index.css: Change `object-fit` to `fill` in the `.intro-video` class to stretch video to fill screen without black bars, matching background image properties.
- [x] Edit index.js: Add error handling for `video.play()` to catch and log any playback errors, and prevent right-click context menu and long press to disable downloads.
