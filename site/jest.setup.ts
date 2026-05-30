import "@testing-library/jest-dom";

global.Response = class Response {
  constructor(
    public body: string,
    public init?: ResponseInit
  ) {}

  get status() {
    return this.init?.status || 200;
  }

  get headers() {
    const headersObj = this.init?.headers || {};
    return new Map(Object.entries(headersObj));
  }

  async text() {
    return this.body;
  }

  async json() {
    return JSON.parse(this.body);
  }

  static json(data: unknown, init?: ResponseInit) {
    return new Response(JSON.stringify(data), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers || {}),
      },
    });
  }
} as never;
