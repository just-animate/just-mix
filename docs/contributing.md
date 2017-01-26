# Contributing
Guidelines for contributing and FAQ for getting the project setup

## Notes on canvas and getting setup for testing
The color parser relies on the browser color parser by painting a pixel to canvas and reading back the color channels.  This results in having to do much less work in the library itself.
Unfortunately, it makes testing more difficult as both jsdom and canvas are required to do actual testing.  jsdom doesn't have extra requirements, but canvas requires platform specific files:

https://github.com/Automattic/node-canvas