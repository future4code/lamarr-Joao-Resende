export class Movie {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private durationInMinutes: number,
    private yearOfRelease: number
  ) { }
  
  getId() {
    return this.id
  }

  getTitle() {
    return this.title
  }

  getDescription() {
    return this.description
  }

  getDuration() {
    return this.durationInMinutes
  }

  getYear() {
    return this.yearOfRelease
  }

  setId(newId: string) {
    this.id = newId
  }

  setTitle(newTitle: string) {
    this.title = newTitle
  }

  setDescription(newDescription: string) {
    this.description = newDescription
  }

  setDuration(newDuration: number) {
    this.durationInMinutes = newDuration
  }

  setYear(newYear: number) {
    this.yearOfRelease = newYear
  }
}
