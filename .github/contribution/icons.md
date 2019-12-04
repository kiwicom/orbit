# Icons

Orbit icons are one of the most essential parts of the Orbit Design system.

## Usage

The implementation API for icons is described [here](https://github.com/kiwicom/orbit-components/blob/master/src/Icon/README.md).
View the list of icons [here](https://kiwicom.github.io/orbit-components/?selectedKind=Icon&selectedStory=List%20of%20all%20icons).

## Adding a new icon

If you want to add or update an icon, insert your `SVG` file into `src/icons/svg` directory and run `yarn build` and then `yarn test -u` to be sure that all your snapshots are updated. Then commit and push changes into a new branch.

## Build process

In the `svg` folder, there are source SVG files as delivered by our designers. The build script `config/build.js` is executed when you run `yarn build`. It processes, optimizes and transforms all of them into React JS components. This script also generates flow typing for all icons. These JS files are then compiled with Babel and copied to the `lib` folder.
