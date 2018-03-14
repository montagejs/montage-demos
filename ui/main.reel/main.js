/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var demos = require("../../assets/data/demos.json")

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    demos: {
        value: null
    },

    enterDocument: {
        value: function (firstTime) {
            var self = this;
            self.demos = demos;
        }
    }
});
