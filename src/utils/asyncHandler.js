const AsyncHandler = (routeHandler) => async (req, res, next) => {
  try {
    await routeHandler(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: `Error Occurred ${error.message}`,
    });
  }
};
