export type Technology = {
  name: string;
  version: string;
  category: "backend" | "frontend" | "mobile" | "other";
};

export const technologies: Technology[] = [
  { name: "Symfony", version: "8.0", category: "backend" },
  { name: "Laravel", version: "12", category: "backend" },
  { name: "PHP", version: "8.5", category: "backend" },
  { name: "React", version: "19", category: "frontend" },
  { name: "Vue.js", version: "3.5", category: "frontend" },
  { name: "Angular", version: "19", category: "frontend" },
  { name: "Flutter", version: "3.27", category: "mobile" },
  { name: "React Native", version: "0.76", category: "mobile" },
  { name: "Python", version: "3.13", category: "backend" },
  { name: "C# / .NET", version: "9.0", category: "backend" },
  { name: "Paperclip", version: "2.0", category: "other" },
];
