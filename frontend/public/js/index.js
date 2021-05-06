const users = {
  melanie: {
    pages: ["about-me", "about-me/education", "contact-me"],
  },
  malin: {
    pages: [
      "portfolio",
      "portfolio/web-design",
      "portfolio/graphic-design",
      "services",
    ],
  },
};

console.log(window.location);
console.log("added new to test");
const pathName = window.location.pathname;
const pathNameSections = window.location.pathname.split("/");
const userUrl = pathNameSections[1];
const extendedUrl = pathNameSections.slice(2).join("/");

if (!Object.keys(users).includes(userUrl)) {
  console.log("home page");
} else {
  if (users[userUrl].pages.includes(extendedUrl)) {
    console.log("available");
  } else {
    console.log(`${userUrl}'s home page`);
  }
  console.log(users[userUrl]);
}
