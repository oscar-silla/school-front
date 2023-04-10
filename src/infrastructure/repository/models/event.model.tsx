class EventModel {
  private id?: string;
  private title!: string;
  private description!: string;
  private img!: string;
  private content?: string;

  getId(): string | undefined {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getImg(): string {
    return this.img;
  }

  getContent(): string | undefined {
    return this.content;
  }

  setId(_id: string): void {
    this.id = _id;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setImg(img: string): void {
    this.img = img;
  }

  setContent(content: string): void {
    this.content = content;
  }
}

export default EventModel;
