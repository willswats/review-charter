export const userQuery: string = `
query ($name: String) {
  User(name: $name) {
    name
    avatar {
      large
    }
    statistics {
      anime {
        minutesWatched
        episodesWatched
        meanScore
        scores {
          score
          count
        }
        count
        statuses {
          status
          count
        }
        formats {
          format
          count
        }
        genres {
          genre
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
        count
        statuses {
          status
          count
        }
        genres {
          genre
          count
        }
        releaseYears {
          releaseYear
          count
        }
        formats {
          format
          count
        }
      }
    }
  }
}
`;
