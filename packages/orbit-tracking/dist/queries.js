"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectsQuery = "\n  query ProjectsQuery($ids: [ID!]) {\n    projects(ids: $ids) {\n      nodes {\n        id\n        name\n        description\n        sshUrlToRepo\n        httpUrlToRepo\n        repository {\n          tree {\n            lastCommit {\n              sha\n              title\n              webUrl\n            }\n          }\n        }\n        projectMembers(relations: DIRECT) {\n          nodes {\n            id\n            accessLevel {\n              stringValue\n            }\n            user {\n              name\n              avatarUrl\n              bot\n              state\n              webUrl\n              publicEmail\n              webPath\n              status {\n                message\n                availability\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n";
var queries = {
    projectsQuery: projectsQuery,
};
exports.default = queries;
