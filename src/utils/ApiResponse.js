class ApiResponse {
  constructor(message, success, data, statusCode) {
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    this.statusCode = statusCode;
  }
}

export { ApiResponse };
