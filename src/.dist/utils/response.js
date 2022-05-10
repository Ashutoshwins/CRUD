"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data = { msg: "invalid request" }, status = 40) => {
    res.status(status).json({ data });
};
exports.default = sendResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy9yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sWUFBWSxHQUFFLENBQUMsR0FBWSxFQUFDLE9BQVMsRUFBQyxHQUFHLEVBQUMsaUJBQWlCLEVBQUMsRUFBQyxNQUFNLEdBQUMsRUFBRSxFQUFDLEVBQUU7SUFDM0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQTtBQUlELGtCQUFlLFlBQVksQ0FBQyJ9