"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    "users-permissions": {
        config: {
            register: {
                allowedFields: ["username", "email", "password", "phone"],
                emailConfirmation: false,
            },
        },
    },
});
