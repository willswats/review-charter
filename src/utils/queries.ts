export const userQuery: string = `
query ($name: String) {
  User(name: $name) {
    name
    avatar {
      large
    }
    statistics {
      anime {
        count
        minutesWatched
        episodesWatched
        meanScore
        scores {
          score
          count
        }
        statuses {
          status
          count
        }
        formats {
          format
          count
        }
        releaseYears {
          releaseYear
          count
        }
      }
      manga {
        count
        minutesWatched
        chaptersRead
        meanScore
        scores {
          score
          count
        }
        statuses {
          status
          count
        }
        formats {
          format
          count
        }
        releaseYears {
          releaseYear
          count
        }
      }
    }
  }
}
`;
