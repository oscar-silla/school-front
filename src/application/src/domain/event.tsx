class Event {
  private id?: string;
  private title!: string;
  private description!: string;
  private img!: string;
  private content?: string;
  private color!: string;

  constructor(
    id?: string,
    title?: string,
    description?: string,
    img?: string,
    content?: string,
    color?: string
  ) {
    this.id = id;
    this.title = title ?? "";
    this.description = description ?? "";
    this.img = img ?? "";
    this.content = content ?? "";
    this.color = color!;
  }

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

  getColor(): string {
    return this.color;
  }

  setId(id: string): void {
    this.id = id;
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

  setColor(color: string): void {
    this.color = color;
  }
}

export default Event;
