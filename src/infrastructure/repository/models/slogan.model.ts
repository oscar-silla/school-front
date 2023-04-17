class SloganModel {
  private id?: string;
  private title!: string;
  private description!: string;
  private img!: string;
  private textButton?: string;
  private url?: string;

  constructor(
    id?: string,
    title?: string,
    description?: string,
    img?: string,
    textButton?: string,
    url?: string
  ) {
    this.id = id ?? "";
    this.title = title ?? "";
    this.description = description ?? "";
    this.img = img ?? "";
    this.textButton = textButton ?? "";
    this.url = url ?? "";
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

  getTextButton(): string | undefined {
    return this.textButton;
  }

  getUrl(): string | undefined {
    return this.url;
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

  setTextButton(textButton: string): void {
    this.textButton = textButton;
  }

  setUrl(url: string): void {
    this.url = url;
  }
}

export default SloganModel;
