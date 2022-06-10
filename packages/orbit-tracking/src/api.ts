const projectsQuery = `
  query ProjectsQuery($ids: [ID!]) {
    projects(ids: $ids) {
      nodes {
        id
        name
        description
        sshUrlToRepo
        httpUrlToRepo
        repository {
          tree {
            lastCommit {
              sha
              title
              webUrl
            }
          }
        }
        projectMembers(relations: DIRECT) {
          nodes {
            id
            accessLevel {
              stringValue
            }
            user {
              name
              avatarUrl
              bot
              state
              webUrl
              publicEmail
              webPath
              status {
                message
                availability
              }
            }
          }
        }
      }
    }
  }
`;

const createCommitMutation = `
  mutation OrbitCommitMutation(
      $path: ID!,
      $branchName: String!,
      $mergeRequestTitle: String!,
      $commitMessage: String!
      $commitContent: String!
      $filePath: String!
    ) {
      createBranch(input: { projectPath: $path, name: $branchName, ref: "master", clientMutationId: $branchName }) {
        branch {
          name
        }
        errors
      }

      mergeRequestCreate(input: {
        projectPath: $path,
        title: $mergeRequestTitle,
        targetBranch: "master",
        description: "Automatically created MR from orbit tracking tool.
        It contains data about orbit-components and props usage,
        which version of orbit package use, contributors,
        component instances and etc.",
        sourceBranch: $branchName }) {
          mergeRequest {
            webUrl
            title
          }
          errors
        }

      commitCreate(input: {
        projectPath: $path,
        branch: $branchName,
        message: $commitMessage,
        actions: [{ action: CREATE, filePath: $filePath, content: $commitContent }]
      }) {
        commit {
          author {
            name
            id
          }
          description
          fullTitle
          message
          sha
          webUrl
        }
        errors
      }
  }
`;

const projectPathQuery = `
  query ProjectPathQuery($path: ID!) {
    project(fullPath: $path) {
      repository {
        tree(ref: "master", recursive: true) {
          blobs {
            nodes {
              path
            }
          }
        }
      }
    }
  }
`;

const projectRawBlobQuery = `
  query ProjectRawBlobQuery($path: ID!, $paths: [String!]!) {
    project(fullPath: $path) {
      repository {
        blobs(ref: "master", paths: $paths) {
          nodes {
            rawBlob
            rawTextBlob
            fileType
          }
        }
      }
    }
  }
`;

const queries = {
  projectsQuery,
  projectPathQuery,
  projectRawBlobQuery,
};

const mutations = {
  createCommitMutation,
};

export { queries, mutations };
