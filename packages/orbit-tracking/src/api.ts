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

const queries = {
  projectsQuery,
};

export default queries;
