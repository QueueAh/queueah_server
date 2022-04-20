const Router = require("koa-router");
const {
  // ATTENDEES
  addAttendees,
  getAttendees,
  // EVENTS
  addEvent,
  getEvents,
  // ORGANIZERS
  addOrganizer,
  getOrganizer,
} = require("./controllers");

const router = new Router();

router
  .get("", (ctx) => (ctx.body = "home route"))
  // ATTENDEES
  .get("/attendees", getAttendees)
  .post("/attendees", addAttendees)
  // EVENTS
  .get("/events", getEvents)
  .post("/events", addEvent)
  // ORGANIZERS
  .get("/organizers", getOrganizer)
  .post("/organizers", addOrganizer);

module.exports = router;
