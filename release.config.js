var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    "@semantic-release/github",
    "@semantic-release/git",
    [
        "@semantic-release/npm",
        {
            "npmPublish": true
        }
    ]
);
config.branches = [ "release" ];
module.exports = config