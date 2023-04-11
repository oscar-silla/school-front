class LastNewModel {
  private id!: string;
  private title!: string;
  private description?: string;
  private img?: string;
  private content!: string;

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string | undefined {
    return this.description;
  }

  getImg(): string | undefined {
    return this.img;
  }

  getContent(): string {
    return this.content;
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
}

export default LastNewModel;
