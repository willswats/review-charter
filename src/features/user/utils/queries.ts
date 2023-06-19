export const userQuery: string = `
query ($name: String) {
  User(name: $name) {
    name
    avatar {
      large
    }
    bannerImage
    statistics {
      anime {
        count
        episodesWatched
        minutesWatched
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
        countries {
          country
          count
        }
      }
      manga {
        count
        chaptersRead
        volumesRead
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
        countries {
          country
          count
        }
      }
    }
  }
}
`;
