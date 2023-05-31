"use strict";

module.exports = {
  register({ strapi }) {
    strapi.service("plugin::users-permissions.user").fetchAuthenticatedUser = (
      id
    ) => {
      return strapi
        .query("plugin::users-permissions.user")
        .findOne({ where: { id }, populate: ["role", "supervisor"] });
    };
  },
};
