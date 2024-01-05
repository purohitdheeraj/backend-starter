class ApiError extends Error {
  constructor(
    message = "something went wrong",
    statusCode,
    errors = [],
    stack = ""
  ) {
    super(message);
    this.stack = stack;
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
