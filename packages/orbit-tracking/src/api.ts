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

const createBranchMutation = `
  mutation OrbitBranchMutation($id: ID!, $name: String!) {
    createBranch(input: { projectPath: $id, name: $name, ref: "master" }) {
      branch {
        name
      }
    }
  }
`;

const createMergeRequestMutation = `
    mutation OrbitMergeRequestMutation($id: ID!, $title: String!, $source: String!) {
      mergeRequestCreate(input: {projectPath: $id, title: $title, targetBranch: "master", description: "Automatically created", sourceBranch: $source }) {
        mergeRequest {
          id
        }
      }
    }
  }
`;

const queries = {
  projectsQuery,
};

const mutations = {
  createMergeRequestMutation,
  createBranchMutation,
};

export { queries, mutations };
