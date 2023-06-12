class User {
  username!: string;
  password!: string;
  name!: string;
  email!: string;
  surnames?: string;
  avatar?: string;

  constructor(
    username: string,
    password: string,
    name: string,
    email: string,
    surnames: string,
    avatar: string
  ) {
    this.username = username ?? "";
    this.password = password ?? "";
    this.name = name ?? "";
    this.email = email ?? "";
    this.surnames = surnames ?? "";
    this.avatar = avatar ?? "";
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getSurnames(): string {
    return this.surnames ?? "";
  }

  getAvatar(): string {
    return this.avatar ?? "";
  }

  setUsername(username: string): void {
    this.username = username ?? "";
  }

  setPassword(password: string): void {
    this.password = password ?? "";
  }

  setName(name: string): void {
    this.name = name ?? "";
  }

  setEmail(email: string): void {
    this.email = email ?? "";
  }

  setSurnames(surnames: string): void {
    this.surnames = surnames ?? "";
  }

  setAvatar(avatar: string): void {
    this.avatar = avatar ?? "";
  }
}

export default User;
